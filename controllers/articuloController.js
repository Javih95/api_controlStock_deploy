const { UPDATE } = require("sequelize/lib/query-types")
const articuloModel = require ("../models/articuloModel.js")
// Crear un registro
const crearArticulo = async (req,res)=>{
    try {
      await articuloModel.create(req.body)
      res.json("Articulo creado correctamente");
    }
    catch (error) {
      res.json({message:error.message})
    }
}
//Actualizar por ID
const actualizarArticulo= async (req,res)=>{
    try {
      await articuloModel.update (req.body,{
        where:{id:req.params.id}
      })
      res.json ( "Articulo Actualizado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer todos los registros
const traerArticulos = async (req,res)=>{
    try {
      const articulos = await articuloModel.findAll()
      res.json(articulos)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Leer un registro por ID
const traerArticulo = async (req,res)=>{
    try {
      const articulo = await articuloModel.findByPk(req.params.id)
      res.json(articulo)
    } catch (error) {
      res.json({message:error.message})
    }
}
//Eliminar un registro por ID
const borrarArticulo = async (req,res)=>{
    try {
      await articuloModel.destroy({
        where:{id:req.params.id}
      })
      res.json ( "Articulo Borrado Correctamente")
    } catch (error) {
      res.json({message:error.message})
    }
}

//Leer todos los registros por orden de creacion
const traerArticulosFiltrados = async (req,res)=>{
  try {
    const{ page = 1, limit = 10 , sort="DESC",type,status} = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);
    const where = {};
    if (type) where.categorie = type;
    if (status) where.status = status;
    const articulos = await articuloModel.findAndCountAll({
      where,
      order: [["createdAt", sort.toUpperCase()]],
      limit: parseInt(limit),
      offset,
  })
  res.json({
    articulos: articulos.rows,
    totalDeArticulos: articulos.count,
    currentPage: parseInt(page),
    totalPages: Math.ceil(articulos.count / limit),
  });
  } catch (error) {
    res.json({message:error.message})
  }
}

module.exports ={crearArticulo,actualizarArticulo,traerArticulo,traerArticulos,borrarArticulo,traerArticulosFiltrados}