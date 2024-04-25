const respuesta = require("./respuestas");

const errors = (err, req, res, next) => {
  console.error(`[ ERROR ] ${err}`);
  const msg = err.message || "Error interno";
  const status = err.statusCode || 500;

  respuesta.error(req, res, msg, status);
};

module.exports = errors;
