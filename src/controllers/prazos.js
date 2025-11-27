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
        const { praz_descricao, praz_data_vencimento, praz_status } = request.body;
        const { id } = request.params;

        const sql = `
            UPDATE PRAZOS 
            SET praz_descricao = ?, praz_data_vencimento = ?, praz_status = ? 
            WHERE praz_id = ?;
        `;

        const values = [praz_descricao, praz_data_vencimento, praz_status, id];
        const [result] = await db.query(sql, values);

        if (result.affectedRows === 0) {
            return response.status(404).json({
                SUCESSO: false,
                mensagem: 'Prazo não encontrado',
                dados: null
            });
        }

        return response.status(200).json({
            SUCESSO: true,
            mensagem: 'Prazo atualizado com sucesso',
            dados: { id, praz_descricao, praz_data_vencimento, praz_status }
        });

    } catch (error) {
        return response.status(500).json({
            SUCESSO: false,
            mensagem: `Erro ao atualizar prazo: ${error.message}`,
            dados: null
        });
    }
},





  async apagarPrazos(request, response) {    
  try {
    const { id } = request.params;

    const sql = `
      UPDATE PRAZOS
      SET praz_status = 2
      WHERE praz_id = ?;
    `;

    const [result] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return response.status(404).json({
        sucesso: false,
        mensagem: `Prazo com ID ${id} não encontrado`,
        dados: null
      });
    }

    return response.status(200).json({
      sucesso: true,
      mensagem: `Prazo ${id} marcado como excluído`,
      dados: { id, status: 2 }
    });

  } catch (error) {
    return response.status(500).json({
      sucesso: false,
      mensagem: `Erro ao excluir prazo: ${error.message}`,
      dados: null
    });
  }
},

async ocultarPrazos(request, response) {    
  try {
    const { id } = request.params;

    
    const sqlBusca = `
      SELECT praz_id, praz_status
      FROM PRAZOS
      WHERE praz_id = ?;
    `;
    const [rows] = await db.query(sqlBusca, [id]);

    if (rows.length === 0) {
      return response.status(404).json({
        sucesso: false,
        mensagem: `Prazo com ID ${id} não encontrado`,
        dados: null
      });
    }

    
    if (rows[0].praz_status === 2) {
      return response.status(400).json({
        sucesso: false,
        mensagem: `Prazo com ID ${id} já está marcado como excluído`,
        dados: null
      });
    }

    
    const sqlOcultar = `
      UPDATE PRAZOS
      SET praz_status = 2
      WHERE praz_id = ?;
    `;
    const [result] = await db.query(sqlOcultar, [id]);

    return response.status(200).json({
      sucesso: true,
      mensagem: `Prazo ${id} marcado como excluído com sucesso`,
      dados: { id, status: 2 }
    });

  } catch (error) {
    return response.status(500).json({
      sucesso: false,
      mensagem: `Erro ao ocultar prazo: ${error.message}`,
      dados: null
    });
  }
},
};
