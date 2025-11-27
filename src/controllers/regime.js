const db = require('../dataBase/connection');

module.exports = {  
  async listarRegime(request, response) {    
    try {

      const sql = `
    SELECT 
        regi_id, 
        regi_nome, 
        regi_descricao, 
        regi_limite_faturamento_anual, 
        regi_tipo_empresa_permitida 
    FROM regime
    WHERE regi_status = 1; 
`;

const [regime] = await db.query(sql);

return response.status(200).json({
    sucesso: true,
    mensagem: 'Lista de regimes obtida com sucesso',
    itens: regime.length,
    dados: regime
});
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao obter lista de regimes: ${error.message}`,
        dados: null
      });
    }
  },



 
  async cadastrarRegime(request, response) {    
    try {

      // Dados do corpo da requisição
const {
    regi_nome,
    regi_descricao,
    regi_limite_faturamento_anual,
    regi_tipo_empresa_permitida
} = request.body;

// Instrução SQL
const sql = `
    INSERT INTO REGIME
        (regi_nome, regi_descricao, regi_limite_faturamento_anual, regi_tipo_empresa_permitida)
    VALUES
        (?, ?, ?, ?);
`;

// Valores
const values = [
    regi_nome,
    regi_descricao,
    regi_limite_faturamento_anual,
    regi_tipo_empresa_permitida
];

// Execução da query
const [result] = await db.query(sql, values);

// Identificação do ID inserido
const dados = {
    id: result.insertId,
    regi_nome,
    regi_descricao,
    regi_limite_faturamento_anual,
    regi_tipo_empresa_permitida
};

return response.status(200).json({
    SUCESSO: true,
    mensagem: 'Regime cadastrado com sucesso',
    dados
});

    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao cadastrar regime: ${error.message}`,
        dados: null
      });
    }
  },




 async editarRegime(request, response) {
    try {

        // Parâmetros do corpo da requisição
        const { regi_nome, regi_descricao, regi_limite_faturamento_anual, regi_tipo_empresa_permitida } = request.body;

        // Parâmetro da rota via URL
        const { id } = request.params;

        // Instrução SQL
        const sql = `
            UPDATE REGIME SET
                regi_nome = ?, 
                regi_descricao = ?, 
                regi_limite_faturamento_anual = ?, 
                regi_tipo_empresa_permitida = ?
            WHERE
                regi_id = ?;
        `;

        // Valores em array
        const values = [regi_nome, regi_descricao, regi_limite_faturamento_anual, regi_tipo_empresa_permitida, id];

        // Execução da query
        const [result] = await db.query(sql, values);

        if (result.affectedRows === 0) {
            return response.status(404).json({
                sucesso: false,
                mensagem: `Regime com ID ${id} não encontrado para atualização`,
                dados: null
            });
        }

        const dados = {
            id,
            regi_nome,
            regi_descricao,
            regi_limite_faturamento_anual,
            regi_tipo_empresa_permitida
        };

        return response.status(200).json({
            sucesso: true,
            mensagem: `Atualização do regime ${id} realizada com sucesso`,
            dados
        });

    } catch (error) {
        return response.status(500).json({
            sucesso: false,
            mensagem: 'Erro na requisição.',
            dados: error.message
        });
    }
},




  async apagarRegime(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Exclusão de regime realizada com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao excluir regime: ${error.message}`,
        dados: null
      });
    }
  },
};

