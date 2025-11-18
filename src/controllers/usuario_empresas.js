const db = require('../dataBase/connection');

module.exports = {
    async listarUsuarioEmpresa (request, response) {
        try {

            const sql = 
            `SELECT
                emp_id, usu_id, usu_emp_nivel_acesso,
                usu_emp_data_vinculo, usu_emp_ativo, usu_emp_observacoes
            FROM USUARIO_EMPRESAS;
            `;

            const [usuario_empresas] = await db.query (sql);

            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Lista de usuários por empresa obtida com sucesso',
                    itens: usuario_empresas.length,
                    dados: usuario_empresas
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