const db = require('../dataBase/connection');

module.exports = {
    async listarEmpresas (request, response) {
        try {

            const sql = 
            ` SELECT
                emp_id, emp_nome_fantasia, emp_razao_social, emp_cnpj,
                emp_endereco, emp_municipio, emp_telefone, emp_email, emp_tipo
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

            const {nome, razao_social, cnpj, endereco, municipio, telefone, email, tipo} = request.body;
            const emp_status = 1;
    
            const sql = `
            INSERT INTO empresas
                (emp_nome_fantasia, emp_razao_social, emp_cnpj,
                emp_endereco, emp_municipio, emp_telefone, emp_email, emp_tipo, emp_status)
            VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?);
                `;
            
            const values = [nome, razao_social, cnpj, endereco, municipio, telefone, email, tipo, emp_status];
            
            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                nome,
                razao_social,
                cnpj,
                endereco,
                municipio,
                telefone,
                email,
                tipo
            };

            return response.status(200).json (
                {
                    sucesso: true,
                    mensagem: 'Cadastro de empresa obtida com sucesso',
                    dados: dados
                }
            );
        } catch (error) {
            return response.status (500).json (
                {
                    sucesso: false,
                    mensagem: `Erro ao cadastrar empresa.`,
                    dados: error.message
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