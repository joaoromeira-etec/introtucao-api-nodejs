const express = require('express');
const router = express.Router();

// Importe dos controllers
const regimeController = require('../controllers/regime');
const prazosController = require('../controllers/prazos');
const auditoriaController = require('../controllers/auditoria');

// Rotas para Regime
router.get('/regime', regimeController.listarRegime);
router.post('/regime', regimeController.cadastrarRegime);   
router.patch('/regime', regimeController.atualizarRegime);
router.delete('/regime', regimeController.apagarRegime);


// Rotas para Prazos
router.get('/prazos', prazosController.listarPrazos);
router.post('/prazos', prazosController.cadastrarPrazos);
router.patch('/prazos', prazosController.atualizarPrazos);
router.delete('/prazos', prazosController.apagarPrazos);


// Rotas para Auditoria
router.get('/auditoria',auditoriaController.listarAuditoria);
router.post('/auditoria',auditoriaController.cadastrarAuditoria);
router.patch('/auditoria',auditoriaController.atualizarAuditoria);
router.delete('/auditoria',auditoriaController.apagarAuditoria);

module.exports = router;