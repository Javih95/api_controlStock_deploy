
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clienteRoutes from "./routes/clienteRouter.js";
import materialRoutes from "./routes/materialRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRoutes);
app.use("/materiales", materialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
