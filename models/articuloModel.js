const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const articuloModel = db.define ("articulos",{
    modelo : {type:DataTypes.STRING},
    color_id : {type:DataTypes.INTEGER},
    categorie : {type:DataTypes.STRING},
    status: {type:DataTypes.ENUM("active", "inactive")},
})
module.exports= articuloModel 