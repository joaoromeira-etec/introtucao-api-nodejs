const db = require('../dataBase/connection');

module.exports = {
    async listarRegimeEmpresa (request, response) {
        try{

            const sql = `
                SELECT
                    regiemp_id, regi_id, emp_id, regiemp_data_inicio, regiemp_data_fim, 
                    regiemp_motivo_alteracao, regiemp_status, regiemp_observacoes 
                FROM REGIME_EMPRESA;
            `;

            const [regimeEmpresas] =  await db.query(sql);

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Regimes de empresas listados com sucesso',
                    itens: regimeEmpresas.length,
                    dados: regimeEmpresas,
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao listar os seguintes regimes das empresas: ${error.message}`,
                    dados: null
                }
            );
        }
    },


     async cadastrarRegimeEmpresa (request, response) {
        try{

            //Dados do corpo da requisição
            const { regi_id, emp_id, dt_inicio, dt_fim,
                motivo_alteracao, status, observacoes } = request.body;


            //Instrução SQL
            // PS: regi_id e emp_id são chaves estrangeiras
            const sql = `
                INSERT INTO REGIME_EMPRESA 
                    (regi_id, emp_id, regiemp_data_inicio, regiemp_data_fim,
                    regiemp_motivo_alteracao, regiemp_status, regiemp_observacoes)
                VALUES
                    (?, ?, ?, ?, ?, ?, ?);
            `;

            //Valores
            const values = [regi_id, emp_id, dt_inicio, dt_fim,
                motivo_alteracao, status, observacoes];

            //Execução da query
            const [result] =  await db.query(sql, values);

            //Identificação do ID inserido.
            const dados = {
                id : result.insertId,
                regi_id,
                emp_id,
                dt_inicio,
                dt_fim,
                motivo_alteracao,
                status,
                observacoes
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de regime das empresas realizado com sucesso',
                    dados: dados
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes regimes das empresas: ${error.message}`,
                    dados: error.message
                }
            );
        }
    },

    async editarRegimeEmpresa (request, response) {
        try{

            //parâmetros do corpo da requisição
            const {regi_id, emp_id, dt_inicio, dt_fim,
                motivo_alteracao, status, observacoes} = request.body;

            //parametros da rota via URL
            const { id } = request.params;

            //Instrução SQL
            const sql = `
                UPDATE REGIME_EMPRESA SET
                    regi_id = ?, emp_id = ?, regiemp_data_inicio = ?, 
                    regiemp_data_fim = ?,  regiemp_motivo_alteracao = ?, 
                    regiemp_status = ?, regiemp_observacoes = ?
                WHERE regiemp_id = ?;
            `;

            //Valores em array.
            const values = [regi_id, emp_id, dt_inicio, dt_fim,
                motivo_alteracao, status, observacoes, id];

            //Execução da query
            const [result] =  await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Regime da empresa com ID ${id} não encontrado.`,
                    dados: null
                });
            }

            const dados = {
                id,
                regi_id,
                emp_id,
                dt_inicio,
                dt_fim,
                motivo_alteracao,
                status,
                observacoes
            };

            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: `Regime da empresa ${id} atualizado com sucesso`,
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

    async apagarRegimeEmpresa (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Exclusão de regimes das empresas realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao remover os seguintes regimes das empresas: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}