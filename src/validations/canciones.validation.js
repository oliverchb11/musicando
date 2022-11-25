const expressValidator = require('express-validator')


const validaciones = [
    expressValidator
    .body('titulo')
    .notEmpty()
    .withMessage("este campo debe ser completado")
    .bail()
    .isLength({ min: 4, max: 100 })
    .withMessage("Este campo debe tener entre 4 y 100 caracteres"),
    expressValidator
    .body('duracion')
    .notEmpty()
    .withMessage("este campo debe ser completado")
    .bail()
    .isInt()
    .withMessage("este campo debe ser numerico")
    .bail()
    .custom((value, { req }) => {
        if (req.body.duracion <= 0) {
            return false
        } else {
            return true
        }
    })
    .withMessage("La duracion no puede ser menor o igual que 0")
]

module.exports = validaciones