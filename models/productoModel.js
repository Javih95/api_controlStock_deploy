const { DataTypes } = require("sequelize");
const db = require("../data/db.js");  // Aquí importas la configuración de tu base de datos
// Modelo de Producto
const productoModel = db.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  art: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});
module.exports = productoModel