const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const colorModel = db.define ("colores",{
    nombre : {type:DataTypes.STRING},
})
module.exports= colorModel