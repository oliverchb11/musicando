const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generos.controller')

//path: /api/v1/musicando/generos

router.get('/', generosController.getAll)

module.exports = router