const db = require('../dataBase/connection');

module.exports = {
    async listarTipoDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Tipos dos documentos listados com sucesso',
                    dados: null
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


     async cadastrarDocumentos (request, response) {
        try{
            return response.status(200).json(
                {
                    sucesso: true,
                    mensagem: 'Cadastro de tipos de documentos realizado com sucesso',
                    dados: null
                }
            );
        }        catch (error) {
            return response.status(500).json(
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar os seguintes tipos de documentos: ${error.message}`,
                    dados: null
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