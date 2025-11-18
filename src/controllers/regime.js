const db = require('../dataBase/connection');

module.exports = {  
  async listarRegime(request, response) {    
    try {

      const sql = `
    SELECT 
        regi_id, 
        regi_nome, 
        regi_descricao, 
        regi_limite_faturamento_anal, 
        regi_tipo_empresa_permitida, 
        regi_ativo
    FROM regime;
`;

const [regime] = await db.query(sql);

return response.status(200).json({
    sucesso: true,
    mensagem: 'Lista de regimes',
    itens: regime.length,
    dados: regime
});

      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Lista de regimes obtida com sucesso',
        dados: null
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
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'cadastro de regime realizado com sucesso',
        dados: null
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
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Atualização de Regime feita com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao atualizar regimes: ${error.message}`,
        dados: null
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

