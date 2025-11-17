const db = require('../dataBase/connection');

module.exports = {
    async listarUsuarioEmpresa (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Lista de usuários por empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao listar usuários por empresas: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async cadastrarUsuarioEmpresa (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Cadastro de usuário à empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar usuário à empresa: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async editarUsuarioEmpresa (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Atualização de empresa do usuário obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar empresa do usuário: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async apagarUsuarioEmpresa (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Exclusão de usuário da empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao excluir usuário da empresa: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}