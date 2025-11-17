const db = require('../dataBase/connection');

module.exports = {  
  async listarPrazos(request, response) {    
    try {
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'Lista de prazos obtida com sucesso',
        dados: null
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
      return response.status(200).json({
        SUCESSO: true,
        mensagem: 'cadastro de prazo realizado com sucesso',
        dados: null
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

