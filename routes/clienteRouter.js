const express = require("express");

const {
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerClientes
} = require("../controllers/clienteController");

const router = express.Router();

// Rutas para clientes
router.post("/", crearCliente);
router.put("/:id", actualizarCliente);
router.delete("/:id", eliminarCliente);
router.get("/", obtenerClientes);

module.exports = router;
