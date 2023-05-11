const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { MONGO_URI } = require('./config/db');

// Cors para permitir conectarse
const cors = require('cors');

// conectar a mongose
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(console.log("DATABSE CONNECTADO..."),{
    useNewUrlParser: true
})

// PUERTO
const port = process.env.PORT || 5000;
// crear el servidor
const app = express();

// habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Habilitar cors
app.use(cors());

// Rutas del app
app.use('/', routes());


// puerto
app.listen(5000, () => {
    console.log('servidor corriendo en el puerto: http://localhost:'+ port+'')
})