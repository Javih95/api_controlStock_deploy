const express = require("express")

const { crearProducto,
    actualizarProducto,
    borrarProducto,
    traerProductos,
    traerProductosFiltrados } = require("../controllers/productoController.js")
const router = express.Router()

router.post("/productos", crearProducto);

router.put("/:id", actualizarProducto)

router.get("/:id", traerProductos)

router.get("/", traerProductosFiltrados)

router.delete("/:id", borrarProducto)

module.exports = router;