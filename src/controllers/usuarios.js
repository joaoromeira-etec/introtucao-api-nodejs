const db = require('../dataBase/connection');

module.exports = {
    async listarUsuarios (request, response) {
        try {

            const sql = `
            SELECT
                usu_id, usu_nome, usu_email, usu_cpf, usu_senha_hash,
                usu_telefone, usu_status, usu_alterar_senha
            FROM USUARIOS;
                `;

            const [usuarios] = await db.query(sql);

            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Lista de usuários obtida com sucesso',
                    itens: usuarios.length,
                    dados: usuarios
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao listar usuários: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async cadastrarUsuarios (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Cadastro de usuário obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar usuário: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async editarUsuarios (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Atualização de usuário obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar usuário: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async apagarUsuarios (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Exclusão de usuário obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao excluir usuário: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}