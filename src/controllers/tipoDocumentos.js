const db = require('../dataBase/connection');

module.exports = {
    async listarTipoDocumentos (request, response) {
        try{

            const sql = `
            SELECT 
                tpd_id, tpd_descricao 
            FROM TIPO_DOCUMENTOS;
            `;

            const [tipoDocumentos] =  await db.query(sql);

            
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Tipos dos documentos listados com sucesso',
                    itens: tipoDocumentos.length,
                    dados: tipoDocumentos
                }


            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar os tipos dos documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },


     async cadastrarTipoDocumentos (request, response) {
        try{

            const { id, descricao } = request.body;

            //Instrução SQL
            const sql = `
            INSERT INTO TIPO_DOCUMENTOS 
                (tpd_descricao) 
            VALUES 
                (?);
            `;

            //Valores
            const values = [descricao];

            //Execução da query
            const [result] =  await db.query(sql, values);

            //Identificação do ID inserido.
            const dados = {
                id : result.insertId,
                descricao
            };
          
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de tipos de documentos realizado com sucesso',
                    dados: dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes tipos de documentos: ${error.message}`,
                    dados: error.message
                }
            );
        }
    },

    async editarTipoDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização dos tipos dos documentos realizada com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar os seguintes tipos dos documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },

    async apagarTipoDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão dos tipos de documentos realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover os seguintes tipos de documentos: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}