import db from "../data/db.js";
import Material from "../models/materialModel.js";
import { eq, like } from "drizzle-orm";

// Crear un Material
export const crearMaterial = async (req, res) => {
  const { art, tipo, descripcion, quantity } = req.body;
  if (!art || !tipo || !descripcion || quantity === undefined || quantity === null) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    const material = await db.insert(Material).values({ art, tipo, descripcion, quantity }).returning();
    res.status(201).json(material[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Material." });
  }
};

// Actualizar Material por ID
export const actualizarMaterial = async (req, res) => {
  const { id } = req.params;
  const { art, tipo, descripcion, quantity } = req.body;

  try {
    const material = await db.update(Material).set({ art, tipo, descripcion, quantity }).where(eq(Material.id, id));

    if (material.changes === 0) {
      return res.status(404).json({ error: "Material no encontrado." });
    }
    res.json({ message: "Material actualizado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Material." });
  }
};

// Eliminar Material por ID
export const eliminarMaterial = async (req, res) => {
  const { id } = req.params;

  try {
    const material = await db.delete(Material).where(eq(Material.id, id));

    if (material.changes === 0) {
      return res.status(404).json({ error: "Material no encontrado." });
    }
    res.json({ message: "Material eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Material." });
  }
};

// Obtener todos los Materiales
export const obtenerMateriales = async (req, res) => {
  try {
    const materiales = await db.select().from(Material);
    res.json(materiales);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los materiales." });
  }
};

// Obtener Materiales filtrados
export const obtenerMaterialesFiltrados = async (req, res) => {
  const { art } = req.query;
  try {
    let query = db.select().from(Material);
    if (art) query = query.where(like(Material.art, `%${art}%`));

    const result = await query;
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar Materiales." });
  }
};
