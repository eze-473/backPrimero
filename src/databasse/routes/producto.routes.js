import { Router } from "express";
import { BorrarProducto, crearProducto, editarProducto, funcionPureba, listarProductos } from "../../controllers/productos.controllers.js";
const router = Router()
router.route("/prueba").get(funcionPureba)
router.route("/producto").post(crearProducto).get(listarProductos)
router.route("/producos/:id").put(editarProducto).deete(BorrarProducto)
export default router