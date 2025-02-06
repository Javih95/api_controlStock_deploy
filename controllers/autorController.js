const express = require ("express")

const autorModel = require("../models/autorModel.js")

//Crear un autor
const crearAutor = async (req,res)=>{
    try {
      await autorModel.create(req.body)
      res.json("Autor creado correctamente");
    }
    catch (error) {
      res.json({message:error.message})
    }
}
//Leer todos los autores
const traerAutores = async (req,res)=>{
    try {
      const autores = await autorModel.findAll()
      res.json(autores)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer un autor por ID
const traerAutor = async (req,res)=>{
    try {
      const autor = await autorModel.findByPk(req.params.id)
      res.json(autor)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Eliminar un autor por ID
const borrarAutor = async (req,res)=>{
    try {
      await autorModel.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Autor Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}

module.exports= {crearAutor,traerAutores,traerAutor,borrarAutor}