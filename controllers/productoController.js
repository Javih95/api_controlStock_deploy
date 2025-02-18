const { UPDATE } = require("sequelize/lib/query-types")
const productoModel = require("../models/productoModel"); 

const crearProducto = async (req,res)=>{
  const { art, descripcion, quantity } = req.body;
    try {
      if (!art || !descripcion || quantity === undefined) {
        return res.status(400).json({ error: "Todos los campos son requeridos." });
      }
      const producto = await productoModel.create(req.body)
      return res.status(201).json(producto);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al crear el producto." });
    }
}
const actualizarProducto = async (req, res) => {
  try {
    const producto = await productoModel.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }
    await productoModel.update(req.body, {
      where: { id: req.params.id }
    });

    res.json("Artículo actualizado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const borrarProducto = async (req, res) => {
  try {
    const producto = await productoModel.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    await productoModel.destroy({
      where: { id: req.params.id }
    });

    res.json("Artículo borrado correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const traerProductos = async (req,res)=>{
    try {
      const productos = await productoModel.findAll()
      if (productos.length === 0) {
        return res.status(404).json({ message: "No se encontraron productos" });
      }

      res.json(productos)
    } catch (error) {
      res.json({message:error.message})
    }
}

const traerProductosFiltrados = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "DESC", art, descripcion, quantity } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Definir los filtros
    const where = {};
    if (art) where.art = { [Sequelize.Op.like]: `%${art}%` }; // Filtrar por artículo
    if (descripcion) where.descripcion = { [Sequelize.Op.like]: `%${descripcion}%` }; // Filtrar por descripción
    if (quantity) where.quantity = quantity; // Filtrar por cantidad

    // Consultar productos con filtros
    const productos = await productoModel.findAndCountAll({
      where,
      order: [["createdAt", sort.toUpperCase()]], // Ordenar por fecha
      limit: parseInt(limit),
      offset,
    });

    // Responder con los productos filtrados
    res.json({
      productos: productos.rows,
      totalDeProductos: productos.count,
      currentPage: parseInt(page),
      totalPages: Math.ceil(productos.count / limit),
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports ={crearProducto,actualizarProducto,borrarProducto,traerProductos,traerProductosFiltrados}