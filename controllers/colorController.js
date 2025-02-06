const { UPDATE } = require("sequelize/lib/query-types")
const colorModel = require ("../models/colorModel.js")
// Crear un color
const crearColor = async (req,res)=>{
    try {
      await colorModel.create(req.body)
      res.json("Color creado correctamente");
    }
    catch (error) {
      res.json({message:error.message})
    }
}

//Leer todos los colores
const traerColores = async (req,res)=>{
    try {
      const colores = await colorModel.findAll()
      res.json(colores)
    } catch (error) {
      res.json({message:error.message})
    }
}

//Leer color por ID
const traerColor = async (req,res)=>{
  try {
    const color = await colorModel.findByPk(req.params.id)
    res.json(color)
  } catch (error) {
    res.json({message:error.message})
  }
}

//Eliminar un color por ID
const borrarColor = async (req,res)=>{
  try {
    await colorModel.destroy({
      where:{id:req.params.id}
    })
    res.json ( "Autor Borrado Correctamente")
  } catch (error) {
    res.json({message:error.message})
  }
}
module.exports = {crearColor,traerColores,traerColor,borrarColor}