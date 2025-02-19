const { Op } = require("sequelize");
const clienteModel = require("../models/clienteModel");

// Crear un nuevo cliente
const crearCliente = async (req, res) => {
  const { nombre, direccion, telefono } = req.body;
  try {
    if (!nombre || !direccion || !telefono) {
      return res.status(400).json({ error: "Todos los campos son requeridos." });
    }
    const cliente = await clienteModel.create(req.body);
    return res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear el cliente." });
  }
};

// Actualizar un cliente por ID
const actualizarCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado." });
    }
    await clienteModel.update(req.body, {
      where: { id: req.params.id },
    });

    res.json("Cliente actualizado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar un cliente por ID
const eliminarCliente = async (req, res) => {
  try {
    const cliente = await clienteModel.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado." });
    }
    await clienteModel.destroy({
      where: { id: req.params.id },
    });

    res.json("Cliente eliminado correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.findAll();
    if (clientes.length === 0) {
      return res.status(404).json({ message: "No se encontraron clientes." });
    }

    res.json(clientes);
  } catch (error) {
    res.json({ message: error.message });
  }
};


module.exports = {
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerClientes
};
