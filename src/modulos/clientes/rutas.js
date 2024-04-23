const express = require("express");

const respuesta = require("../../red/respuestas");
const controlador = require("./controlador");

const router = express.Router();

router.get("/", (req, res) => {
  controlador.todos().then((items) => {
    respuesta.success(req, res, items, 200);
  });
});

module.exports = router;
