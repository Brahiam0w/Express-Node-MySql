import express from "express";
import dotenv from "dotenv";
import { pool } from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
  res.send("🔮 API Numerología funcionando correctamente");
});

// Rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
