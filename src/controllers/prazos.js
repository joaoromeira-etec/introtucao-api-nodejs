const db = require('../dataBase/connection');

module.exports = {  
  async listarPrazos(request, response) {    
    try {

      const sql = `
    SELECT 
        praz_id, 
        emp_id, 
        praz_descricao, 
        praz_data_vencimento, 
        praz_status
    FROM prazos;
`;

const [prazos] = await db.query(sql);

return response.status(200).json({
    sucesso: true,
    mensagem: 'Lista de prazos obtida com sucesso',
    itens: prazos.length,
    dados: prazos
});
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao obter lista de prazos: ${error.message}`,
        dados: null
      });
    }
  },


 
  async cadastrarPrazos(request, response) {    
    try {

    // Dados do corpo da requisição
const { emp_id, praz_descricao, praz_data_vencimento, praz_status } = request.body;

// Instrução SQL
const sql = `
    INSERT INTO PRAZOS 
        (emp_id, praz_descricao, praz_data_vencimento, praz_status)
    VALUES
        (?, ?, ?, ?);
`;

// Valores
const values = [
    emp_id,
    praz_descricao,
    praz_data_vencimento,
    praz_status
];

// Execução da query
const [result] = await db.query(sql, values);

// Identificação do ID inserido
const dados = {
    id: result.insertId,
    emp_id,
    praz_descricao,
    praz_data_vencimento,
    praz_status
};

return response.status(200).json({
    SUCESSO: true,
    mensagem: 'Prazo cadastrado com sucesso',
    dados
});

    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao cadastrar prazos: ${error.message}`,
        dados: null
      });
    }
  },





  async editarPrazos(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Atualização de prazo feita com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao atualizar prazos: ${error.message}`,
        dados: null
      });
    }
  },





  async apagarPrazos(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Exclusão de prazo realizada com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao excluir prazos: ${error.message}`,
        dados: null
      });
    }
  },
};

