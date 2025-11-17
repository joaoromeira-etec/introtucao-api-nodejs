const express = require('express');
const router = express.Router();

// Import dos arquivos de rotas
const joaoPedro = require('./joaoPedro');
const naiara = require('./naiara');

router.use('/', joaoPedro);
router.use('/', naiara);

module.exports = router;