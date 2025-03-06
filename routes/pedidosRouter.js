import express from "express";
import { 
  crearPedido, 
  obtenerPedidos, 
  obtenerPedidoPorId, 
  actualizarPedido, 
  eliminarPedido 
} from "../controllers/pedidosController.js";

const router = express.Router();

// Rutas de pedidos
router.post("/", crearPedido);           // Crear un pedido
router.get("/", obtenerPedidos);         // Obtener todos los pedidos
router.get("/:id", obtenerPedidoPorId);  // Obtener un pedido por ID
router.put("/:id", actualizarPedido);    // Actualizar un pedido por ID
router.delete("/:id", eliminarPedido);   // Eliminar un pedido por ID

export default router;
