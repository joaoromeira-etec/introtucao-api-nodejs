const express = require('express');
const router = express.Router();

// Import dos arquivos de rotas
const joaoPedro = require('./joaoPedro');
const naiara = require('./naiara');
const rian = require('./rian');


router.use('/', joaoPedro);
router.use('/', naiara);
router.use('/', rian);

module.exports = router;