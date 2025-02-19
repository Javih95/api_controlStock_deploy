const { DataTypes } = require("sequelize");
const db = require("../data/db.js"); 
const pedidoModel = db.define("Pedido", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  clienteId: { type: DataTypes.INTEGER, allowNull: false },
  productos: { type: DataTypes.JSON, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  entregado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

module.exports = pedidoModel ;