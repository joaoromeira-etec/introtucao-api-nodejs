const db = require('../dataBase/connection');

module.exports = {  
  async listarAuditoria(request, response) {    
    try {

      const sql = `
    SELECT 
        aud_id,
        usu_id,
        aud_acao,
        aud_tabela_afetada,
        aud_registro_afetado,
        aud_data_acao
    FROM auditoria;
`;

const [auditoria] = await db.query(sql);

return response.status(200).json({
    sucesso: true,
    mensagem: 'Lista de auditorias',
    itens: auditoria.length,
    dados: auditoria
});

      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Lista de auditoria obtida com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao obter lista de auditoria: ${error.message}`,
        dados: null
      });
    }
  },




  async cadastrarAuditoria(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'cadastro de auditoria realizado com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao cadastrar auditoria: ${error.message}`,
        dados: null
      });
    }
  },




 
  async editarAuditoria(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Atualização de auditoria feita com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao atualizar auditoria: ${error.message}`,
        dados: null
      });
    }
  },




 
  async apagarAuditoria(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Exclusão de auditoria realizada com sucesso',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        SUCESSO: false,
        mensagem: `Erro ao excluir auditoria: ${error.message}`,
        dados: null
      });
    }
  },
};

