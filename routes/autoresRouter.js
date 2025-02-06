const express = require ("express")

const {crearAutor,traerAutores,traerAutor,borrarAutor} = require("../controllers/autorController.js")

const router= express.Router()

router.post ("/",crearAutor)
router.get ("/",traerAutores)
router.get ("/:id",traerAutor)
router.delete("/:id",borrarAutor) 

module.exports = router