const db = require("../../db/mysql");

const TABLA = "clientes";

const todos = () => {
  return db.todos(TABLA);
};

const uno = (id) => {
  return db.uno(TABLA, id);
};

const agregar = (data) => {
  return db.agregar(TABLA, data);
};

const actualizar = (data) => {
  return db.actualizar(TABLA, data);
};

const eliminar = (data) => {
  return db.eliminar(TABLA, data);
};

module.exports = {
  todos,
  uno,
  agregar,
  actualizar,
  eliminar,
};
