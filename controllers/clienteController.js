import db from "../data/db.js";
import clientes from "../models/clienteModel.js";
import { eq, like } from "drizzle-orm";

// Crear un cliente
export const crearCliente = async (req, res) => {
  const { nombre, direccion, telefono } = req.body;
  if (!nombre || !direccion || !telefono) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }
  
  try {
    const result = await db.insert(clientes).values({ nombre, direccion, telefono }).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el cliente." });
  }
};

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const result = await db.select().from(clientes);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los clientes." });
  }
};

// Obtener clientes filtrados
export const obtenerClientesFiltrados = async (req, res) => {
  const { nombre } = req.query;
  try {
    let query = db.select().from(clientes);
    if (nombre) query = query.where(like(clientes.nombre, `%${nombre}%`));

    const result = await query;
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar clientes." });
  }
};

// Actualizar cliente por ID
export const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono } = req.body;
  
  try {
    const result = await db.update(clientes).set({ nombre, direccion, telefono }).where(eq(clientes.id, id));

    if (result.changes === 0) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }
    res.json({ message: "Cliente actualizado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el cliente." });
  }
};

// Eliminar cliente por ID
export const eliminarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.delete(clientes).where(eq(clientes.id, id));

    if (result.changes === 0) {
      return res.status(404).json({ error: "Cliente no encontrado." });
    }
    res.json({ message: "Cliente eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el cliente." });
  }
};
