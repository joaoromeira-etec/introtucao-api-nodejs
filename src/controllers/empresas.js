const db = require('../dataBase/connection');

module.exports = {
    async listarEmpresas (request, response) {
        try {

            const sql = 
            ` SELECT
                emp_id, emp_nome_fantasia, emp_razao_social,
                emp_cnpj, emp_endereco, emp_telefone, emp_tipo
            FROM EMPRESAS;
            `;

            const [empresas] =  await db.query(sql);

            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Lista de empresas obtida com sucesso',
                    itens: empresas.length,
                    dados: empresas
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao listar empresas: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async cadastrarEmpresas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Cadastro de empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar empresa: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async editarEmpresas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Atualização de empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao atualizar empresa: ${error.message}`,
                    dados: null
                }
            );
        }
    },
    async apagarEmpresas (request, response) {
        try {
            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Exclusão de empresa obtida com sucesso',
                    dados: null
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao excluir empresa: ${error.message}`,
                    dados: null
                }
            );
        }
    },
}