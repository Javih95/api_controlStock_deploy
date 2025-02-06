const db = require ("../data/db.js")
const {DataTypes} = require ("sequelize")
const autorModel = db.define ("autores",{
    name : {type:DataTypes.STRING},
    surname : {type:DataTypes.STRING},
})
module.exports= autorModel 