const express = require("express");

const respuesta = require("../../red/respuestas");
const controlador = require("./controlador");

const router = express.Router();

const todos = async (req, res, next) => {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
};

const uno = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await controlador.uno(id);
    respuesta.success(req, res, item, 200);
  } catch (error) {
    next(error);
  }
};

const agregar = async (req, res, next) => {
  try {
    const { body } = req;
    const item = await controlador.agregar(body);
    respuesta.success(req, res, item, 201);
  } catch (error) {
    next(error);
  }
};

const actualizar = async (req, res, next) => {
  try {
    const { body } = req;
    const item = await controlador.actualizar(body);
    respuesta.success(req, res, item, 200);
  } catch (error) {
    next(error);
  }
};

const eliminar = async (req, res, next) => {
  try {
    const { body } = req;
    const item = await controlador.eliminar(body);
    respuesta.success(req, res, item, 200);
  } catch (error) {
    next(error);
  }
};

router.get("/", todos);
router.get("/:id", uno);
router.post("/add", agregar);
router.put("/", actualizar);
router.post("/", eliminar);

module.exports = router;
