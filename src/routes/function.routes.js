import { Router } from "express";
import {
  appCrear,
  appActualizar,
  appConsultar,
  appEliminar,
} from "../controllers/function.controllers.js";

import { resultadoValidacion } from "../../helpers/validateHelpers.js";
import { ValidarCrear } from "../../middleware/validation/validation.js";

const router = Router();

// Ruta GET /api/consultar?id=123
router.get("/consultar", appConsultar);

// Ruta POST /api/crear con validaciones (espera nombre y edad en el body)
router.post("/crear", ValidarCrear, resultadoValidacion, appCrear);

// Ruta PUT /api/actualizar/123  --> se accede con req.params.id
router.put("/actualizar/:id", appActualizar);

// Ruta DELETE /api/eliminar/123 --> se accede con req.params.id
router.delete("/eliminar/:id", appEliminar);

export default router;
