const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuentasSchema = new Schema({
  cuenta: [
    {
      usuario: {
        type: Schema.ObjectId,
        ref: "Usuarios",
      }
    }
  ],
  nombre_ahorro: {
    type: String,
    trim: true,
  },
  cantidad: {
    type: Number,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Cuentas", cuentasSchema);
