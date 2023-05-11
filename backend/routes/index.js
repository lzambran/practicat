const express = require("express");
const router = express.Router();


// llmasdo los controladores
const usuarioController =  require('../controllers/usuarioController');
const cuentaController = require('../controllers/cuentaController');

module.exports = function(){

    // Agregar nuevos Usuarios  via Post
    router.post("/usuarios", usuarioController.nuevoUsuario);

    // Obtener todos los usuarios via Get
    router.get('/usuarios', usuarioController.mostrarUsuarios);

    // mostrar un usuario en especifico con su (ID)
    router.get('/usuarios/:idUsuario', usuarioController.mostrarUsuario);

    // Actualizar un usuario
    router.put('/usuarios/:idUsuario', usuarioController.actualizarUsuario);

    // Eliminar un usuario
    router.delete('/usuarios/:idUsuario', usuarioController.eliminarUsuario);


    //********************************************************************/

     // Agregar nuevos Cuentas  via Post
    router.post('/cuentas', cuentaController.nuevaCuenta);

    // Obtener todos las cuentas via Get
    router.get('/cuentas', cuentaController.mostrarCuentas);

    // mostrar una cuenta en especifico con su (ID)
    router.get('/cuentas/:idCuenta', cuentaController.mostrarCuenta);

    // Actualizar una cuenta
     router.put('/cuentas/:idCuenta', cuentaController.actualizarCuenta);

    // Eliminar una cuenta
    router.delete('/cuentas/:idCuenta', cuentaController.eliminarCuenta);


    return router;
}