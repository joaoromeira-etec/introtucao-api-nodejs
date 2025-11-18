const db = require('../dataBase/connection');

module.exports = {
    async listarDocumentos (request, response) {
        try{

            const sql = `
            SELECT 
                doc_id, usu_id, emp_id, tpd_id, 
                doc_arquivo_nome, doc_status, doc_data_emissao, doc_valor 
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
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de documentos realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },

    async editarDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de documentos realizada com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar os seguintes documentos: ${error.message}`,
                    dados: null
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