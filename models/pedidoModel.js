const { DataTypes } = require("sequelize");
const db = require("../data/db.js");  // Aquí importas la configuración de tu base de datos
// Modelo de Pedido
const pedidoModel = db.define("Pedido", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  clienteId: { type: DataTypes.INTEGER, allowNull: false },
  productos: { type: DataTypes.JSON, allowNull: false }, // Se guarda como JSON
  fecha: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  entregado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

module.exports = pedidoModel 