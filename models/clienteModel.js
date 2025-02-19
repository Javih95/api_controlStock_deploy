const db = require("../data/db.js")
const { DataTypes } = require("sequelize")
const clienteModel = db.define("Cliente", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING, allowNull: false },
});
module.exports = clienteModel;