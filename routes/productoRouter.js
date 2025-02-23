import express from "express";
import {
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    obtenerProductos,
} from "../controllers/productoController.js";
const router = express.Router()

router.post("/", crearProducto);

router.put("/:id", actualizarProducto)

router.get("/", obtenerProductos)

router.delete("/:id", eliminarProducto)

export default router;