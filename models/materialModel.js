const db = require("../data/db.js")
const { DataTypes } = require("sequelize")
const materialModel = db.define("Material", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  art: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});
module.exports = materialModel