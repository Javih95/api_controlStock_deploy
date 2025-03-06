import db from "../data/db.js";
import pedidoModel from "../models/pedidoModel.js";
import { eq } from "drizzle-orm";

// Crear un pedido
export const crearPedido = async (req, res) => {
  const { clienteId, productos, fecha, entregado } = req.body;

  if (!clienteId || !productos) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }
  console.log("Datos recibidos:", req.body);

  try {
    const pedido = await db.insert(pedidoModel).values({
      clienteId,
      productos: JSON.stringify(productos), // Guardar como JSON en la DB
      fecha: fecha || new Date().toISOString(), // Fecha actual si no se proporciona
      entregado: entregado ?? false, // Por defecto, `false`
    }).returning();

    res.status(201).json(pedido[0]);
  }catch (error) {
    console.error("Error al crear el pedido:", error);
    res.status(500).json({ error: "Error al crear el pedido." });
  }
  
};

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await db.select().from(pedidoModel);
    
    // Convertir productos de string JSON a array antes de enviar
    const pedidosProcesados = pedidos.map(pedido => ({
      ...pedido,
      productos: JSON.parse(pedido.productos), // Convertir de texto a JSON
    }));

    res.json(pedidosProcesados);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pedidos." });
  }
};

// Obtener un pedido por ID
export const obtenerPedidoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const pedido = await db.select().from(pedidoModel).where(eq(pedidoModel.id, id));

    if (!pedido.length) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }

    res.json(pedido[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el pedido." });
  }
};

// Actualizar un pedido por ID
export const actualizarPedido = async (req, res) => {
  const { id } = req.params;
  const { clienteId, productos, fecha, entregado } = req.body;

  try {
    const pedidoActualizado = await db.update(pedidoModel)
      .set({
        clienteId,
        productos: JSON.stringify(productos),
        fecha,
        entregado,
      })
      .where(eq(pedidoModel.id, id));

    if (pedidoActualizado.changes === 0) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }

    res.json({ message: "Pedido actualizado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el pedido." });
  }
};

// Eliminar un pedido por ID
export const eliminarPedido = async (req, res) => {
  const { id } = req.params;

  try {
    const pedidoEliminado = await db.delete(pedidoModel).where(eq(pedidoModel.id, id));

    if (pedidoEliminado.changes === 0) {
      return res.status(404).json({ error: "Pedido no encontrado." });
    }

    res.json({ message: "Pedido eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pedido." });
  }
};
