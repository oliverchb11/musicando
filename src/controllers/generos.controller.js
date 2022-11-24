const { request, response } = require('express')
const generosController = {};
const db = require("../database/models");



generosController.getAll = async(req = request, res = response) => {
    try {
        let allGeneros = await db.Generos.findAll({
            include: ["canciones"]
        })
        if (allGeneros.length === 0) {
            res.status(400).json({
                response: false,
                message: `No hay canciones disponibles`
            })
            return;
        }
        res.status(200).json({
            response: true,
            generos: allGeneros
        })
    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}



module.exports = generosController