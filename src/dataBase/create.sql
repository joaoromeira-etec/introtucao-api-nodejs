CREATE TABLE USUARIOS (
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(32) NOT NULL,
    usu_email VARCHAR(60) NOT NULL,
    usu_cpf CHAR(11) UNIQUE NOT NULL,
    usu_senha_hash VARCHAR(255) NOT NULL,
    usu_telefone VARCHAR(15) NOT NULL,
    usu_status BIT DEFAULT 0,
    usu_alterar_senha BIT DEFAULT 0
);

CREATE TABLE EMPRESAS (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_nome_fantasia VARCHAR(100) NOT NULL,
    emp_razao_social VARCHAR(150) NOT NULL,
    emp_cnpj CHAR(14) UNIQUE NOT NULL,
    emp_endereco VARCHAR(255) NOT NULL,
    emp_municipio VARCHAR(100) NOT NULL,
    emp_telefone VARCHAR(50) NOT NULL,
    emp_email VARCHAR(100) NOT NULL,
    emp_tipo BIT DEFAULT 0
);

CREATE TABLE USUARIO_EMPRESAS (
    emp_id INT,
    usu_id INT,
    usu_emp_nivel_acesso TINYINT NOT NULL,
    usu_emp_data_vinculo DATE NOT NULL,
    usu_emp_status BIT DEFAULT 1,
    usu_emp_observacoes VARCHAR(200) NULL,
    PRIMARY KEY (emp_id, usu_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id),
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id)
);

CREATE TABLE REGIME (
    regi_id INT AUTO_INCREMENT PRIMARY KEY,
    regi_nome VARCHAR(100) NOT NULL,
    regi_descricao VARCHAR(255),
    regi_limite_faturamento_anual DECIMAL(15,2) NOT NULL,
    regi_tipo_empresa_permitida INT NOT NULL,
    regi_status TINYINT NOT NULL  
);

CREATE TABLE REGIME_EMPRESA (
    regiemp_id INT AUTO_INCREMENT PRIMARY KEY,
    regi_id INT,
    emp_id INT,
    regiemp_data_inicio DATE NOT NULL,
    regiemp_data_fim DATE NULL,
    regiemp_motivo_alteracao VARCHAR(100) NULL,
    regiemp_status TINYINT NOT NULL,
    regiemp_observacoes VARCHAR(100) NULL,
    FOREIGN KEY (regi_id) REFERENCES REGIME(regi_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id)
);

CREATE TABLE TIPO_DOCUMENTOS (
    tpd_id INT AUTO_INCREMENT PRIMARY KEY,
    tpd_descricao VARCHAR(30) NOT NULL,
    tpd_status BIT DEFAULT 1
);

CREATE TABLE DOCUMENTOS (
    doc_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT,
    emp_id INT,
    tpd_id INT,
    doc_arquivo_nome VARCHAR(100) NOT NULL,
    doc_data_emissao DATE NOT NULL,
    doc_valor DECIMAL(12,2) NOT NULL,
    doc_status BIT DEFAULT 1,
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id),
    FOREIGN KEY (tpd_id) REFERENCES TIPO_DOCUMENTOS(tpd_id)
);

CREATE TABLE PRAZOS (
    praz_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    praz_descricao VARCHAR(50) NOT NULL,
    praz_data_vencimento DATE NOT NULL,
    praz_status TINYINT NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES EMPRESAS(emp_id)
);

CREATE TABLE AUDITORIA (
    aud_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT,
    aud_acao TINYINT NOT NULL,
    aud_tabela_afetada VARCHAR(30) NOT NULL,
    aud_registro_afetado INT NOT NULL,
    aud_data_acao DATE NOT NULL,
    aud_status TINYINT NOT NULL,
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id)
);

CREATE TABLE SUPORTE (
    sup_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id_solicitante INT,
    usu_id_responsavel INT,
    sup_assunto VARCHAR(50) NOT NULL,
    sup_descricao VARCHAR(500) NOT NULL,
    sup_status TINYINT NOT NULL,
    sup_data_abertura DATETIME NOT NULL,
    sup_data_suporte DATETIME NOT NULL,
    sup_id_resp INT,
    FOREIGN KEY (usu_id_solicitante) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (usu_id_responsavel) REFERENCES USUARIOS(usu_id),
    FOREIGN KEY (sup_id_resp) REFERENCES USUARIOS(usu_id)
);
