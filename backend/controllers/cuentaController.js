const Cuentas = require('../models/Cuentas');

exports.nuevaCuenta = async (req, res, next) => {
    const cuenta = new Cuentas(req.body);
    try {
        await cuenta.save();
        res.json({mensaje: "Se agrego una nueva cuenta"});
    } catch (error) {
        console.log(error);
        next();
        
    }
};

exports.mostrarCuentas = async (req, res, next) => {
    try {
        const cuenta =  await Cuentas.find({}).populate({
            path: 'cuenta.usuario',
            model: 'Usuarios'
        });
        res.json(cuenta);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.mostrarCuenta = async (req, res, next) => {
    const cuenta = await Cuentas.findById(req.params.idCuenta).populate({
        path: "cuenta.usuario",
        model: "Usuarios"
    });

    if(!cuenta){
        res.json({mensaje: 'Esta cuneta no existe'});
        return next();
    }
    res.json(cuenta);
};

exports.actualizarCuenta = async (req, res, next) => {
    try {
        let cuenta = await Cuentas.findOneAndUpdate({_id : req.params.idCuenta}, req.body, {
            new: true
        } )
        .populate({
            path: 'cuenta.usuario',
            model: 'Usuarios'
        });
        res.json(cuenta)
    } catch (error) {
        console.log(error)
        next();
    }
};

exports.eliminarCuenta = async (req, res, next) => {
    try {
        await Cuentas.findOneAndDelete({ _id : req.params.idCuenta});
        res.json({mensaje: 'La cuenta se ha eliminado correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}



