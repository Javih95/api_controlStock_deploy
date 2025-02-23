import db from "../data/db.js";
import productos from "../models/productoModel.js";
import { eq, like } from "drizzle-orm";

// Crear un Producto
export const crearProducto = async (req, res) => {
  const { art, descripcion, quantity } = req.body;
  if (!art || !descripcion || quantity === undefined || quantity === null) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    const producto = await db.insert(productos).values({ art, descripcion, quantity }).returning();
    res.status(201).json(producto[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Producto." });
  }
};
// Obtener todos los Productos
export const obtenerProductos = async (req, res) => {
  try {
    const result = await db.select().from(productos);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Producto." });
  }
};
// Actualizar Producto por ID
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { art, descripcion, quantity } = req.body;
  
  try {
    const result = await db.update(productos).set({ art, descripcion, quantity }).where(eq(productos.id, id));

    if (result.changes === 0) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    res.json({ message: "Producto actualizado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Producto." });
  }
};
// Eliminar Prodcuto por ID
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.delete(productos).where(eq(productos.id, id));

    if (result.changes === 0) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    res.json({ message: "Producto eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Producto." });
  }
};

