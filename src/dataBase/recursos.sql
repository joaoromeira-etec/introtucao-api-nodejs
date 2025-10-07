-- SELECTs simples para cada tabela
SELECT usu_id, usu_nome, usu_email, usu_cpf, usu_senha_hash, usu_telefone, usu_status, usu_alterar_senha FROM USUARIOS;
SELECT emp_id, emp_nome_fantasia, emp_razao_social, emp_cnpj, emp_endereco, emp_telefone, emp_tipo FROM EMPRESAS;
SELECT emp_id, usu_id, usu_empre_nivel_acesso, usu_emp_data_vínculo, usu_emp_ativo, usu_emp_observacoes FROM USUARIOS_EMPRESAS;
SELECT regi_id, regi_nome, regi_descricao, regi_limite_faturamento_anal, regi_tipo_empresa_permitida, regi_ativo FROM REGIME;
SELECT regiemp_id, regi_id, emp_id, regiemp_data_inicio, regiemp_data_fim, regiemp_motivo_alteracao, regiemp_status, regiemp_observacoes FROM REGIME_EMPRESA;
SELECT tpd_id, tpd_descricao FROM TIPO_DOCUMENTOS;
SELECT doc_id, usu_id, emp_id, tpd_id, doc_arquivo_nome, doc_status, doc_data_upload, doc_data_emissao, doc_valor FROM DOCUMENTOS;
SELECT praz_id, emp_id, praz_descricao, praz_data_vencimento, praz_status FROM PRAZOS;
SELECT aud_id, usu_id, aud_acao, aud_tabela_afetada, aud_registro_afetado, aud_data_acao FROM AUDITORIA;
SELECT sup_id, usu_id_solicitante, usu_id_responsavel, sup_assunto, sup_descricao, sup_status, sup_data_abertura, sup_data_suporte, sup_id_resp FROM SUPORTE;

-- SELECTs com INNER JOIN para tabelas com chave estrangeira
SELECT ue.emp_id, e.emp_nome_fantasia, ue.usu_id, u.usu_nome, ue.usu_empre_nivel_acesso, ue.usu_emp_data_vínculo, ue.usu_emp_ativo, ue.usu_emp_observacoes
FROM USUARIOS_EMPRESAS ue
INNER JOIN EMPRESAS e ON ue.emp_id = e.emp_id
INNER JOIN USUARIOS u ON ue.usu_id = u.usu_id;

SELECT re.regiemp_id, re.regi_id, r.regi_nome, re.emp_id, e.emp_nome_fantasia, re.regiemp_data_inicio, re.regiemp_data_fim, re.regiemp_motivo_alteracao, re.regiemp_status, re.regiemp_observacoes
FROM REGIME_EMPRESA re
INNER JOIN REGIME r ON re.regi_id = r.regi_id
INNER JOIN EMPRESAS e ON re.emp_id = e.emp_id;

SELECT d.doc_id, d.usu_id, u.usu_nome, d.emp_id, e.emp_nome_fantasia, d.tpd_id, t.tpd_descricao, d.doc_arquivo_nome, d.doc_status, d.doc_data_upload, d.doc_data_emissao, d.doc_valor
FROM DOCUMENTOS d
INNER JOIN USUARIOS u ON d.usu_id = u.usu_id
INNER JOIN EMPRESAS e ON d.emp_id = e.emp_id
INNER JOIN TIPO_DOCUMENTOS t ON d.tpd_id = t.tpd_id;

SELECT p.praz_id, p.emp_id, e.emp_nome_fantasia, p.praz_descricao, p.praz_data_vencimento, p.praz_status
FROM PRAZOS p
INNER JOIN EMPRESAS e ON p.emp_id = e.emp_id;

SELECT a.aud_id, a.usu_id, u.usu_nome, a.aud_acao, a.aud_tabela_afetada, a.aud_registro_afetado, a.aud_data_acao
FROM AUDITORIA a
INNER JOIN USUARIOS u ON a.usu_id = u.usu_id;

SELECT s.sup_id, s.usu_id_solicitante, us.usu_nome AS solicitante, s.usu_id_responsavel, ur.usu_nome AS responsavel, s.sup_assunto, s.sup_descricao, s.sup_status, s.sup_data_abertura, s.sup_data_suporte, s.sup_id_resp, urp.usu_nome AS responsavel_resposta
FROM SUPORTE s
INNER JOIN USUARIOS us ON s.usu_id_solicitante = us.usu_id
INNER JOIN USUARIOS ur ON s.usu_id_responsavel = ur.usu_id
INNER JOIN USUARIOS urp ON s.sup_id_resp = urp.usu_id;

-- DROP TABLES na ordem correta (filhas antes das pais)
DROP TABLE IF EXISTS SUPORTE;
DROP TABLE IF EXISTS AUDITORIA;
DROP TABLE IF EXISTS PRAZOS;
DROP TABLE IF EXISTS DOCUMENTOS;
DROP TABLE IF EXISTS TIPO_DOCUMENTOS;
DROP TABLE IF EXISTS REGIME_EMPRESA;
DROP TABLE IF EXISTS USUARIOS_EMPRESAS;
DROP TABLE IF EXISTS REGIME;
DROP TABLE IF EXISTS EMPRESAS;
DROP TABLE IF EXISTS USUARIOS;
