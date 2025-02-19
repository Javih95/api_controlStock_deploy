const { Op } = require("sequelize");
const materialModel = require("../models/materialModel");

// Crear un nuevo material
const crearMaterial = async (req, res) => {
  const { art, tipo, descripcion, quantity } = req.body;
  try {
    if (!art || !tipo || !descripcion || quantity === undefined) {
      return res.status(400).json({ error: "Todos los campos son requeridos." });
    }
    const material = await materialModel.create(req.body);
    return res.status(201).json(material);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear el material." });
  }
};

// Actualizar un material por ID
const actualizarMaterial = async (req, res) => {
  try {
    const material = await materialModel.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ message: "Material no encontrado." });
    }
    await materialModel.update(req.body, {
      where: { id: req.params.id },
    });

    res.json("Material actualizado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar un material por ID
const eliminarMaterial = async (req, res) => {
  try {
    const material = await materialModel.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ message: "Material no encontrado." });
    }
    await materialModel.destroy({
      where: { id: req.params.id },
    });

    res.json("Material eliminado correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los materiales
const obtenerMateriales = async (req, res) => {
  try {
    const materiales = await materialModel.findAll();
    if (materiales.length === 0) {
      return res.status(404).json({ message: "No se encontraron materiales." });
    }

    res.json(materiales);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener materiales con filtros, paginación y ordenamiento
const obtenerMaterialesFiltrados = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "DESC", art, tipo, descripcion, quantity } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Definir los filtros
    const where = {};
    if (art) where.art = { [Op.like]: `%${art}%` }; // Filtrar por artículo
    if (tipo) where.tipo = { [Op.like]: `%${tipo}%` }; // Filtrar por tipo
    if (descripcion) where.descripcion = { [Op.like]: `%${descripcion}%` }; // Filtrar por descripción
    if (quantity) where.quantity = quantity; // Filtrar por cantidad exacta

    // Consultar materiales con filtros
    const materiales = await materialModel.findAndCountAll({
      where,
      order: [["createdAt", sort.toUpperCase()]], // Ordenar por fecha
      limit: parseInt(limit),
      offset,
    });

    // Responder con los materiales filtrados
    res.json({
      materiales: materiales.rows,
      totalDeMateriales: materiales.count,
      currentPage: parseInt(page),
      totalPages: Math.ceil(materiales.count / limit),
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  crearMaterial,
  actualizarMaterial,
  eliminarMaterial,
  obtenerMateriales,
  obtenerMaterialesFiltrados,
};
