/// IMPORTAMOS LA LIBRERIA DE CHECK PARA VALIDAR DATOS ////
import { check } from "express-validator";

// VALIDAMOS LOS DATOS DE LAS PETICIONES HTTP//

export const ValidarCrear = [
  check("id")
    .notEmpty()
    .withMessage("No se recibio la clave ID")
    .isNumeric()
    .withMessage(" La clave ID debe ser númerica"),
  check("name").notEmpty().withMessage("No se recibio la clave Nombre"),
  check("correo")
    .notEmpty()
    .withMessage("No se recibio la clave Correo")
    .normalizeEmail()
    .isEmail()
    .withMessage("Correo no valido"),
  check("fecha")
    .notEmpty()
    .withMessage("No se recibio la fecha")
    .isISO8601()
    .withMessage("El formato fecha no es válido"),
];
