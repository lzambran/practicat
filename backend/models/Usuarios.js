const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuariosSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    cedula:{
        type: String,
        unique: true,
        trim: true
    },
    fecha:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuarios', usuariosSchema);