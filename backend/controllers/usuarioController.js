const Usuarios = require('../models/Usuarios');

// agregar un nuevo usuario
exports.nuevoUsuario = async function (req, res, next) {
    const usuario = new Usuarios(req.body);

    try {
        // almacenar un nuevo usuario
        await usuario.save();
        res.json({ mensaje: ' Se agrego un nuevo cliente'});
    } catch (error) {
        // si hay un error solo pasara a siguiete
        res.send(error);
        next();
    }
};

// MOSTRAR TODOS LOS USUARIOS 
exports.mostrarUsuarios = async function (req, res, next) {
    try {
        const usuarios = await Usuarios.find({});
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        next();
        
    }
};

// mostrar usuarioss por el id
exports.mostrarUsuario = async function (req, res, next) {
    const usuario = await Usuarios.findById(req.params.idUsuario);

    if(!usuario){
        res.json({ mensaje: 'Este usuario no existe'});
        next();
    }
    //mostarar el usuario
    res.json(usuario);
};

// Actualizar usuario por el (ID)
exports.actualizarUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuarios.findOneAndUpdate(
        { _id: req.params.idUsuario },
        req.body, 
        {
            new : true,
        });
        res.json(usuario);
    } catch (error) {
        res.send(error);
        next(); 
    }
};

// Eliminar usaurio por el (ID)
exports.eliminarUsuario = async (req, res, next) => {
    try {
       await Usuarios.findOneAndDelete({_id : req.params.idUsuario});
       res.json({mensaje : 'El usuario se ha eliminado correctamente'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}

