import { validationResult } from "express-validator";

export function resultadoValidacion(req, res, next) {
  ////CAPTURA RESPUESTA DE LA VALIDACIÓN
  const result = validationResult(req).array();

  /// VALIDO SI EL ARRAY CONTIENE ALGO
  if (!result.length) return next();
  console.log(result);
  ///SI HAY ERROR LO ENVIO COMO JSON
  const error = result[0].msg;
  res.status(400).json({ code: 400, message: error });
}
