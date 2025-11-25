const db = require('../dataBase/connection');

module.exports = {
    async listarDocumentos (request, response) {
        try{

            const sql = `
            SELECT 
                doc_id, usu_id, emp_id, tpd_id, 
                doc_arquivo_nome, doc_data_emissao, doc_valor 
            FROM DOCUMENTOS;
            `;

            const [documentos] =  await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Documentos listados com sucesso',
                    itens: documentos.length,
                    dados: documentos
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar os documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },


     async cadastrarDocumentos (request, response) {
        try{

            //Dados do corpo da requisição
            const { usu_id, emp_id, tpd_id, nome, dt_emissao, valor } = request.body;

            //Instrução SQL
            // PS: usu_id, emp_id e tpd_id são chaves estrangeiras
            const sql = `
            INSERT INTO DOCUMENTOS 
                (usu_id, emp_id, tpd_id, doc_arquivo_nome, doc_data_emissao, doc_valor) 
            VALUES
                (?, ?, ?, ?, ?, ?);
            `;

            //Valores
            const values = [usu_id, emp_id, tpd_id, nome, dt_emissao, valor];

            //Execução da query
            const [result] =  await db.query(sql, values);

            //Identificação do ID inserido.
            const dados = {
                id : result.insertId,
                usu_id,
                emp_id,
                tpd_id,
                nome,
                dt_emissao,
                valor
            };
          



            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de documentos realizado com sucesso',
                    dados: dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes documentos: ${error.message}`,
                    dados: error.message
                }
            );
        }
    },

    async editarDocumentos (request, response) {
        try{

            //parâmetros do corpo da requisição
            const { arq_nome, dt_emissao, valor } = request.body;

            //parametros da rota via URL
            const { id } = request.params;

            // Instrução SQL
            const sql = `
            UPDATE DOCUMENTOS SET
                doc_arquivo_nome = ?, doc_data_emissao = ?, doc_valor = ?
            WHERE
                doc_id = ?;
            `;

            //Valores em Array.
            const values = [arq_nome, dt_emissao, valor, id];

            //Execução da query
            const [result] =  await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                        sucesso: false,
                        mensagem: 'Documento não encontrado para atualização',
                        dados: null
                    });
            }

            const dados = {
                id,
                arq_nome,
                dt_emissao,
                valor
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: `Atualização do documento ${id} realizada com sucesso`,
                    dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: 'Erro na requisição.',
                    dados: error.message
                }
            );
        }
    },

    async apagarDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de documentos realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover os seguintes documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}