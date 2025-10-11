-- Inserts para USUARIOS
INSERT INTO USUARIOS (usu_id, usu_nome, usu_email, usu_cpf, usu_senha_hash, usu_telefone, usu_status, usu_alterar_senha) VALUES
(1, 'Ana Silva', 'ana@email.com', '12345678901', 'hash1', '11999990001', 1, 0),
(2, 'Bruno Souza', 'bruno@email.com', '23456789012', 'hash2', '11999990002', 1, 1),
(3, 'Carla Dias', 'carla@email.com', '34567890123', 'hash3', '11999990003', 0, 0),
(4, 'Daniel Lima', 'daniel@email.com', '45678901234', 'hash4', '11999990004', 1, 1),
(5, 'Eduarda Melo', 'eduarda@email.com', '56789012345', 'hash5', '11999990005', 1, 0),
(6, 'Felipe Costa', 'felipe@email.com', '67890123456', 'hash6', '11999990006', 0, 1);

-- Inserts para EMPRESAS
INSERT INTO EMPRESAS (emp_id, emp_nome_fantasia, emp_razao_social, emp_cnpj, emp_endereco, emp_telefone, emp_tipo) VALUES
(1, 'Tech Solutions', 'Tech Solutions LTDA', '12345678000101', 'Rua A, 100', '1133330001', 0),
(2, 'Comercial Dias', 'Comercial Dias ME', '23456789000102', 'Rua B, 200', '1133330002', 1),
(3, 'Melo Serviços', 'Melo Serviços EIRELI', '34567890000103', 'Rua C, 300', '1133330003', 2),
(4, 'Lima Store', 'Lima Store MEI', '45678901000104', 'Rua D, 400', '1133330004', 0),
(5, 'Costa Market', 'Costa Market LTDA', '56789012000105', 'Rua E, 500', '1133330005', 1),
(6, 'Silva Digital', 'Silva Digital ME', '67890123000106', 'Rua F, 600', '1133330006', 2);

-- Inserts para USUARIOS_EMPRESAS
INSERT INTO USUARIOS_EMPRESAS (emp_id, usu_id, usu_empre_nivel_acesso, usu_emp_data_vínculo, usu_emp_ativo, usu_emp_observacoes) VALUES
(1, 1, 1, '2023-01-01', 1, 'Administrador'),
(2, 2, 2, '2023-02-01', 1, 'Gerente'),
(3, 3, 1, '2023-03-01', 0, 'Inativo'),
(4, 4, 2, '2023-04-01', 1, 'Financeiro'),
(5, 5, 1, '2023-05-01', 1, 'RH'),
(6, 6, 2, '2023-06-01', 1, 'TI');

-- Inserts para REGIME
INSERT INTO REGIME (regi_id, regi_nome, regi_descricao, regi_limite_faturamento_anal, regi_tipo_empresa_permitida, regi_ativo) VALUES
(1, 'Simples Nacional', 'Regime para pequenas empresas', 4800000.00, 1, 1),
(2, 'Lucro Presumido', 'Regime para médias empresas', 78000000.00, 2, 1),
(3, 'Lucro Real', 'Regime para grandes empresas', 999999999.99, 3, 1),
(4, 'MEI', 'Microempreendedor Individual', 81000.00, 1, 1),
(5, 'Especial', 'Regime especial', 1000000.00, 2, 0),
(6, 'Isento', 'Isento de regime', 0.00, 3, 0);

-- Inserts para REGIME_EMPRESA
INSERT INTO REGIME_EMPRESA (regiemp_id, regi_id, emp_id, regiemp_data_inicio, regiemp_data_fim, regiemp_motivo_alteracao, regiemp_status, regiemp_observacoes) VALUES
(1, 1, 1, '2023-01-01', '2023-12-31', 'Mudança anual', 1, 'Ativo'),
(2, 2, 2, '2023-02-01', '2023-12-31', 'Atualização', 1, 'Ativo'),
(3, 3, 3, '2023-03-01', '2023-12-31', 'Revisão', 2, 'Suspenso'),
(4, 4, 4, '2023-04-01', '2023-12-31', 'Mudança', 0, 'Encerrado'),
(5, 5, 5, '2023-05-01', '2023-12-31', 'Ajuste', 1, 'Ativo'),
(6, 6, 6, '2023-06-01', '2023-12-31', 'Novo regime', 1, 'Ativo');

-- Inserts para TIPO_DOCUMENTOS
INSERT INTO TIPO_DOCUMENTOS (tpd_id, tpd_descricao) VALUES
(1, 'Nota Fiscal'),
(2, 'Recibo'),
(3, 'Contrato'),
(4, 'Boleto'),
(5, 'Comprovante'),
(6, 'Outros');

-- Inserts para DOCUMENTOS
INSERT INTO DOCUMENTOS (doc_id, usu_id, emp_id, tpd_id, doc_arquivo_nome, doc_status, doc_data_upload, doc_data_emissao, doc_valor) VALUES
(1, 1, 1, 1, 'nf1.pdf', 1, '2023-01-10 10:00:00', '2023-01-09', 1000.00),
(2, 2, 2, 2, 'recibo1.pdf', 0, '2023-02-10 11:00:00', '2023-02-09', 500.00),
(3, 3, 3, 3, 'contrato1.pdf', 1, '2023-03-10 12:00:00', '2023-03-09', 2000.00),
(4, 4, 4, 4, 'boleto1.pdf', 2, '2023-04-10 13:00:00', '2023-04-09', 300.00),
(5, 5, 5, 5, 'comprovante1.pdf', 3, '2023-05-10 14:00:00', '2023-05-09', 150.00),
(6, 6, 6, 6, 'outros1.pdf', 1, '2023-06-10 15:00:00', '2023-06-09', 250.00);

-- Inserts para PRAZOS
INSERT INTO PRAZOS (praz_id, emp_id, praz_descricao, praz_data_vencimento, praz_status) VALUES
(1, 1, 'Entrega IRPJ', '2023-03-31', 0),
(2, 2, 'Pagamento DAS', '2023-04-20', 1),
(3, 3, 'Entrega DCTF', '2023-05-15', 2),
(4, 4, 'Reunião Fiscal', '2023-06-10', 0),
(5, 5, 'Envio NF-e', '2023-07-05', 1),
(6, 6, 'Revisão Contrato', '2023-08-12', 2);

-- Inserts para AUDITORIA
INSERT INTO AUDITORIA (aud_id, usu_id, aud_acao, aud_tabela_afetada, aud_registro_afetado, aud_data_acao) VALUES
(1, 1, 0, 'USUARIOS', 1, '2023-01-01'),
(2, 2, 1, 'EMPRESAS', 2, '2023-02-01'),
(3, 3, 2, 'DOCUMENTOS', 3, '2023-03-01'),
(4, 4, 0, 'REGIME', 4, '2023-04-01'),
(5, 5, 1, 'PRAZOS', 5, '2023-05-01'),
(6, 6, 2, 'SUPORTE', 6, '2023-06-01');

-- Inserts para SUPORTE
INSERT INTO SUPORTE (sup_id, usu_id_solicitante, usu_id_responsavel, sup_assunto, sup_descricao, sup_status, sup_data_abertura, sup_data_suporte, sup_id_resp) VALUES
(1, 1, 2, 'Erro de acesso', 'Não consigo acessar o sistema', 0, '2023-01-01 09:00:00', '2023-01-01 10:00:00', 3),
(2, 2, 3, 'Dúvida fiscal', 'Como emitir nota?', 1, '2023-02-01 09:00:00', '2023-02-01 10:00:00', 4),
(3, 3, 4, 'Problema de senha', 'Esqueci minha senha', 2, '2023-03-01 09:00:00', '2023-03-01 10:00:00', 5),
(4, 4, 5, 'Solicitação de relatório', 'Preciso de relatório anual', 0, '2023-04-01 09:00:00', '2023-04-01 10:00:00', 6),
(5, 5, 6, 'Erro de cadastro', 'Não consigo cadastrar empresa', 1, '2023-05-01 09:00:00', '2023-05-01 10:00:00', 1),
(6, 6, 1, 'Dúvida sobre impostos', 'Quais impostos devo pagar?', 2, '2023-06-01 09:00:00', '2023-06-01 10:00:00', 2);
