const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000
const morgan = require('morgan');
const bodyParser = require('body-parser');

//middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//requiriendo routes
const cancionesRouter = require('./routers/canciones.router');
const generosRouter = require('./routers/generos.router');

//endpoints
app.use('/api/v1/musicando/canciones', cancionesRouter)
app.use('/api/v1/musicando/generos', generosRouter)

//port listen 
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
})