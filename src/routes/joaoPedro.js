const express = require('express');
const router = express.Router();

// Importe dos controllers
const TipoDocumentosController = require('../controllers/tipoDocumentos');
const DocumentosController = require('../controllers/documentos');
const SuporteController = require('../controllers/suporte');
const RegimeEmpresaController = require('../controllers/regimeEmpresa');

// Rotas para Tipo de Documentos
router.get('/tipoDocumentos', TipoDocumentosController.listarTipoDocumentos);
router.post('/tipoDocumentos', TipoDocumentosController.cadastrarTipoDocumentos);   
router.patch('/tipoDocumentos/:id', TipoDocumentosController.editarTipoDocumentos);
router.delete('/tipoDocumentos', TipoDocumentosController.apagarTipoDocumentos);


// Rotas para Documentos
router.get('/documentos', DocumentosController.listarDocumentos);
router.post('/documentos', DocumentosController.cadastrarDocumentos);
router.patch('/documentos/:id', DocumentosController.editarDocumentos);
router.delete('/documentos', DocumentosController.apagarDocumentos);


// Rotas para Suporte
router.get('/suporte', SuporteController.listarSuportes);
router.post('/suporte', SuporteController.cadastrarSuporte);
router.patch('/suporte/:id', SuporteController.editarSuporte);
router.delete('/suporte', SuporteController.apagarSuporte);

// Rotas para Regime da Empresa
router.get('/regimeEmpresa', RegimeEmpresaController.listarRegimeEmpresa);
router.post('/regimeEmpresa', RegimeEmpresaController.cadastrarRegimeEmpresa);
router.patch('/regimeEmpresa/:id', RegimeEmpresaController.editarRegimeEmpresa);
router.delete('/regimeEmpresa', RegimeEmpresaController.apagarRegimeEmpresa);

module.exports = router;