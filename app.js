import express from "express";
import cors from "cors";
import pkg from "express-validator";
import functionRoutes from "./src/routes/function.routes.js";

const app = express();
const { body, query, validationResult, ExpressValidator } = pkg;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", functionRoutes)

/// manejo de errores//
app.use((req, res, next) => {
  console.log("PETICIÓN A RUTA NO ENCONTRADA....");
  res.status(404).json({ Message: " RUTA NO ENCONTRADA ..." });
});

export default app;
