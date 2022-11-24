const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/canciones.controller')

//path: /api/v1/musicando/canciones
router.get('/', cancionesController.getAll)
router.get('/:id', cancionesController.getById)
router.put('/:id', cancionesController.update)
router.delete('/:id', cancionesController.delete)
router.post('/', cancionesController.create)



module.exports = router;