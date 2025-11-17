const db = require('../dataBase/connection');

module.exports = {
    async listarRegimeEmpresa (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Regimes de empresas listados com sucesso',
                    dados: null
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