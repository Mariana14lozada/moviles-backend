export const appCrear = (req, res) => {
  console.log("LLEGUÉ AL CONTROLADOR !!");

  const { id, name, correo, fecha } = req.body;

  console.log("~ appCrear ~ id:", id);
  console.log("~ appCrear ~ name:", name);
  console.log("~ appCrear ~ correo:", correo);
  console.log("~ appCrear ~ fecha:", fecha);

  // Respuesta sin el campo "data"
  res.status(201).json({
    resultado: "¡Se recibieron los datos correctamente!",
    id,
    name,
    correo,
    fecha
  });
};

export const appConsultar = async (req, res) => {
  console.log("Ingrese el controlador de consultas");
  const id = req.query.id;
  console.log("~ appConsultar ~ id:", id);
  res.status(404).json({ id });
};

export const appActualizar = async (req, res) => {
  console.log("Ingrese el controlador ");
  const id = req.params.id;
  console.log("~ appConsultar ~ id:", id);
  res.staus(404).json({ id });
};

///Eliminar
export const appEliminar = async (req, res) => {
  console.log("Ingrese el controlador de ");
  const id = req.params.id;
  console.log("~ appEliminar ~ id:", id);
  res.staus(404).json({ id });
};
