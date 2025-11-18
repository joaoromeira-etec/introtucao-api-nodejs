const db = require('../dataBase/connection');

module.exports = {
    async listarSuportes (request, response) {
        try{

            const sql = `
                SELECT
                    sup_id, usu_id_solicitante, usu_id_responsavel, sup_assunto, sup_descricao,
                    sup_status, sup_data_abertura, sup_data_suporte, sup_id_resp 
                FROM SUPORTE;
            `;

            const [suporte] =  await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Suportes listados com sucesso',
                    itens: suporte.length,
                    dados: suporte,
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar os suportes: ${error.message}`,
                    dados: null
                }
            );
        }
    },


     async cadastrarSuporte (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de suportes realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes suportes: ${error.message}`,
                    dados: null
                }
            );
        }
    },

    async editarSuporte (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização de suportes realizada com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar os seguintes suportes: ${error.message}`,
                    dados: null
                }
            );
        }
    },

    async apagarSuporte (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de suportes realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover os seguintes suportes: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}