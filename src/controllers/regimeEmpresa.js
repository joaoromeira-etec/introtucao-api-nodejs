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
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de regime das empresas realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes regimes das empresas: ${error.message}`,
                    dados: null
                }
            );
        }
    },

    async editarRegimeEmpresa (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Atualização dos regimes das empresas realizada com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar os seguintes regimes das empresas: ${error.message}`,
                    dados: null
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