const express = require ("express")

const {crearColor,traerColores,traerColor,borrarColor} = require("../controllers/colorController.js")

const router = express.Router()

router.post ("/",crearColor)

router.get ("/",traerColores)

router.get("/:id",traerColor)

router.delete("/:id",borrarColor)

module.exports = router