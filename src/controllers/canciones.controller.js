const { request, response } = require('express')
const cancionesController = {};
const db = require("../database/models");


cancionesController.getAll = async(req = request, res = response) => {
    try {
        let allCanciones = await db.Canciones.findAll({
            include: ["Albumes", "Artistas", "Generos"]
        })
        if (allCanciones.length === 0) {
            res.status(400).json({
                response: false,
                message: `No hay canciones disponibles`
            })
            return;
        }
        res.json({
            response: true,
            canciones: allCanciones
        })

    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}
cancionesController.getById = async(req = request, res = response) => {
    try {
        let id = req.params.id
        let cancion = await db.Canciones.findByPk(id, {
            include: ["Albumes", "Artistas", "Generos"]
        })
        if (cancion === null) {
            res.status(400).json({
                response: false,
                message: `No existe una cancion con el id ${id}`
            })
            return;
        }
        res.json({
            response: true,
            cancion
        })

    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}
cancionesController.create = async(req = request, res = response) => {
    try {
        const data = {
            titulo: req.body.titulo,
            duracion: Number(req.body.duracion),
            created_at: new Date(),
            updated_at: new Date(),
            genero_id: Number(req.body.genero_id),
            album_id: Number(req.body.album_id),
            artista_id: Number(req.body.artista_id)
        }
        let save = await db.Canciones.create(data)
        res.json({
            response: true,
            message: 'Cancion agregada correctamente'
        })

    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}


cancionesController.update = async(req = request, res = response) => {
    try {
        let id = req.params.id;

        let cancion = await db.Canciones.findByPk(id, {
            include: ["Albumes", "Artistas", "Generos"]
        })
        if (cancion === null) {
            res.status(400).json({
                response: false,
                message: `No existe una cancion con el id ${id}`
            })
            return;
        }

        let newCancion = await cancion.update({
            ...req.body,
            duracion: Number(req.body.duracion),
            updated_at: new Date(),
            genero_id: Number(req.body.genero_id),
            album_id: Number(req.body.album_id),
            artista_id: Number(req.body.artista_id)
        });

        res.json({
            response: true,
            message: 'Cancion actualizada correctamente',
            cancion: newCancion
        })

    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}


cancionesController.delete = async(req = request, res = response) => {
    try {
        let id = req.params.id
        let cancion = await db.Canciones.findByPk(id, {
            include: ["Albumes", "Artistas", "Generos"]
        })
        if (cancion === null) {
            res.status(400).json({
                response: false,
                message: `No existe una cancion con el id ${id}`
            })
            return;
        }
        let removeCancion = await cancion.destroy();
        res.json({
            response: true,
            message: "Cancion eliminada correctamente",
            cancion: removeCancion
        })

    } catch (error) {
        res.status(500).json({
            response: false,
            message: 'Error de servidor'
        })
    }
}


module.exports = cancionesController;