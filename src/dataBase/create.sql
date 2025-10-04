-- Criação das tabelas do sistema de contabilidade

CREATE TABLE USUARIOS (
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(32) NOT NULL,
    usu_email VARCHAR(60) NOT NULL,
    usu_cpf CHAR(11) UNIQUE NOT NULL,
    usu_senha_hash VARCHAR(255) NOT NULL,
    usu_telefone VARCHAR(15),
    usu_status BIT DEFAULT 0,
    usu_alterar_senha BIT DEFAULT 0
);

CREATE TABLE EMPRESAS (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_nome_fantasia VARCHAR(100) NOT NULL,
    emp_razao_social VARCHAR(150) NOT NULL,
    emp_cnpj CHAR(14) UNIQUE NOT NULL,
    emp_endereco VARCHAR(255),
    emp_telefone VARCHAR(15),
    emp_tipo TINYINT NOT NULL
);

CREATE TABLE USUARIOS_EMPRESAS (
    emp_id INT,
    usu_id INT,
    usu_empre_nivel_acesso TINYINT,
    usu_emp_data_vínculo DATE,
    usu_emp_ativo BIT DEFAULT 1,
    usu_emp_observacoes VARCHAR(200),
    PRIMARY KEY (emp_id, usu_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id),
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id)
);

CREATE TABLE REGIME (
    regi_id INT AUTO_INCREMENT PRIMARY KEY,
    regi_nome VARCHAR(50) NOT NULL,
    regi_descricao VARCHAR(150),
    regi_limite_faturamento_anal DECIMAL(12,2),
    regi_tipo_empresa_permitida TINYINT,
    regi_ativo BIT DEFAULT 1
);

CREATE TABLE REGIME_EMPRESA (
    regiemp_id INT AUTO_INCREMENT PRIMARY KEY,
    regi_id INT,
    emp_id INT,
    regiemp_data_inicio DATE,
    regiemp_data_fim DATE,
    regiemp_motivo_alteracao VARCHAR(100),
    regiemp_status TINYINT,
    regiemp_observacoes VARCHAR(100),
    FOREIGN KEY (regi_id) REFERENCES REGIME(regi_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id)
);

CREATE TABLE TIPO_DOCUMENTOS (
    tpd_id INT AUTO_INCREMENT PRIMARY KEY,
    tpd_descricao VARCHAR(30)
);

CREATE TABLE DOCUMENTOS (
    doc_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT,
    emp_id INT,
    tpd_id INT,
    doc_arquivo_nome VARCHAR(100),
    doc_status TINYINT,
    doc_data_upload DATETIME,
    doc_data_emissao DATE,
    doc_valor DECIMAL(12,2),
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id),
    FOREIGN KEY (tpd_id) REFERENCES TIPO_DOCUMENTOS(tpd_id)
);

CREATE TABLE PRAZOS (
    praz_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    praz_descricao VARCHAR(50),
    praz_data_vencimento DATE,
    praz_status TINYINT,
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id)
);

CREATE TABLE AUDITORIA (
    aud_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT,
    aud_acao TINYINT,
    aud_tabela_afetada VARCHAR(30),
    aud_registro_afetado INT,
    aud_data_acao DATE,
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id)
);

CREATE TABLE SUPORTE (
    sup_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id_solicitante INT,
    usu_id_responsavel INT,
    sup_assunto VARCHAR(50),
    sup_descricao VARCHAR(500),
    sup_status TINYINT,
    sup_data_abertura DATETIME,
    sup_data_suporte DATETIME,
    sup_id_resp INT,
    FOREIGN KEY (usu_id_solicitante) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (usu_id_responsavel) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (sup_id_resp) REFERENCES USUARIOS(usu_id)
);
