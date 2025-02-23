import express from "express";
import {
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerClientes,
  obtenerClientesFiltrados
} from "../controllers/clienteController.js";

const router = express.Router();

router.post("/", crearCliente);
router.get("/", obtenerClientes);
router.get("/filtrar", obtenerClientesFiltrados);
router.put("/:id", actualizarCliente);
router.delete("/:id", eliminarCliente);

export default router;

