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
router.patch('/tipoDocumentos/:id', TipoDocumentosController.editarTipoDocumentos); // Params.
router.delete('/tipoDocumentos/:id', TipoDocumentosController.apagarTipoDocumentos); // Params, Não-Recomendado.
router.delete('/tipoDocumentos/del/:id', TipoDocumentosController.ocultarTipoDocumentos); // Params, Recomendado.


// Rotas para Documentos
router.get('/documentos', DocumentosController.listarDocumentos);
router.post('/documentos', DocumentosController.cadastrarDocumentos);
router.patch('/documentos/:id', DocumentosController.editarDocumentos);
router.delete('/documentos/:id', DocumentosController.apagarDocumentos); //Não-Recomendado.
router.delete('/documentos/del/:id', DocumentosController.ocultarDocumentos); //Recomendado.


// Rotas para Suporte
router.get('/suporte', SuporteController.listarSuportes);
router.post('/suporte', SuporteController.cadastrarSuporte);
router.patch('/suporte/:id', SuporteController.editarSuporte);
router.delete('/suporte/:id', SuporteController.apagarSuporte);

// Rotas para Regime da Empresa
router.get('/regimeEmpresa', RegimeEmpresaController.listarRegimeEmpresa);
router.post('/regimeEmpresa', RegimeEmpresaController.cadastrarRegimeEmpresa);
router.patch('/regimeEmpresa/:id', RegimeEmpresaController.editarRegimeEmpresa);
router.delete('/regimeEmpresa/:id', RegimeEmpresaController.apagarRegimeEmpresa);
router.delete('/regimeEmpresa/del/:id', RegimeEmpresaController.ocultarRegimeEmpresa);

module.exports = router;