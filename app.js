const express = require("express")
const cors = require("cors")

const app = express()

const db = require("./data/db.js")
const coloresRouter = require("./routes/coloresRouter.js")
const articulosRouter = require("./routes/articulosRouter.js")
const autoresRouter = require("./routes/autoresRouter.js")
app.use(cors())
app.use(express.json())

const port = process.env.PORT ?? 3036

app.use("/colores", coloresRouter)
app.use("/articulos", articulosRouter)
app.use("/autores", autoresRouter)
const conexionDB = async () => {
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");

    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);

    }
}
app.listen(port, () => {
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);
})