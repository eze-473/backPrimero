import mongoose, { Schema } from "mongoose";
const productoEsquema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minlength: 2,
    maxLengtn: 100,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 50,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Arte", "Cuadernos", "Escritura", "Hojas"],
  },
  descripcion_breve: {
    type: String,
    required: true,
    minlength: 3,
    maxLengtn: 50,
  },
  descripcion_breve: {
    type: String,
    required: true,
    minlength: 50,
    maxLengtn: 10000,
  },
});
const Producto = mongoose.model("Producto", productoEsquema);
export default Producto;
