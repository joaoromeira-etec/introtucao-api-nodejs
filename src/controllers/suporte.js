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

            //Dados do corpo da requisição
            const { usu_id_solicitante, usu_id_responsavel, assunto, descricao,
                status, dt_abertura, dt_suporte, sup_id_resp } = request.body;

            //Instrução SQL
            // PS: usu_id_solicitante e usu_id_responsavel são chaves estrangeiras
            const sql = `
                INSERT INTO SUPORTE 
                    (usu_id_solicitante, usu_id_responsavel, sup_assunto, sup_descricao,
                    sup_status, sup_data_abertura, sup_data_suporte, sup_id_resp) 
                VALUES
                    (?, ?, ?, ?, ?, ?, ?, ?);
            `;

            //Valores
            const values = [usu_id_solicitante, usu_id_responsavel, assunto, descricao,
                status, dt_abertura, dt_suporte, sup_id_resp];

            //Execução da query
            const [result] =  await db.query(sql, values);

            //Identificação do ID inserido.
            const dados = {
                id : result.insertId,
                usu_id_solicitante, 
                usu_id_responsavel,
                assunto,
                descricao,
                status,
                dt_abertura,
                dt_suporte,
                sup_id_resp
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de suportes realizado com sucesso',
                    dados: dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes suportes: ${error.message}`,
                    dados: error.message
                }
            );
        }
    },

    async editarSuporte (request, response) {
        try{

            //parâmetros do corpo da requisição
            const { usu_id_solicitante, usu_id_responsavel, assunto, descricao,
                status, dt_abertura, dt_suporte, sup_id_resp } = request.body;

            //parametros da rota via URL
            const { id } = request.params;

            //Instrução SQL
            const sql = `
                UPDATE SUPORTE SET
                    usu_id_solicitante = ?, usu_id_responsavel = ?, 
                    sup_assunto = ?, sup_descricao = ?,
                    sup_status = ?, sup_data_abertura = ?, 
                    sup_data_suporte = ?, sup_id_resp = ?
                WHERE sup_id = ?;
            `;

            //Valores
            const values = [usu_id_solicitante, usu_id_responsavel, assunto, descricao,
                status,  dt_abertura, dt_suporte, sup_id_resp, id];

            //Execução da query
            const [result] =  await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Suporte com ID ${id} não encontrado.`,
                    dados: null
                });
            }

            dados = {
                id,
                usu_id_solicitante,
                usu_id_responsavel,
                assunto,
                descricao,
                status,
                dt_abertura,
                dt_suporte,
                sup_id_resp
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: `Pedido de suporte ${id} atualizado com sucesso`,
                    dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: 'Erro de requisição.',
                    dados: error.message
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