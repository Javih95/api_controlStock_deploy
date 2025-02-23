import express from "express";
import { crearMaterial,
    actualizarMaterial,
    eliminarMaterial,
    obtenerMateriales,
    obtenerMaterialesFiltrados, } from "../controllers/materialController.js";


const router = express.Router()

router.post("/",  crearMaterial)

router.put("/:id", actualizarMaterial)
router.get("/", obtenerMateriales);
//router.get("/", obtenerMaterialesFiltrados )

//router.get("/:id",obtenerMateriales)

router.delete("/:id", eliminarMaterial)

export default router;