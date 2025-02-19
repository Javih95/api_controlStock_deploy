const express = require("express")

const { crearMaterial,
    actualizarMaterial,
    eliminarMaterial,
    obtenerMateriales,
    obtenerMaterialesFiltrados, } = require("../controllers/materialController.js")

const router = express.Router()

router.post("/",  crearMaterial)

router.put("/:id", actualizarMaterial)

router.get("/", obtenerMaterialesFiltrados )

router.get("/:id",obtenerMateriales)

router.delete("/:id", eliminarMaterial)

module.exports = router;