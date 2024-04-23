const db = require("../../db/mysql");

const TABLA = "clientes";

const todos = () => {
  return db.todos(TABLA);
};

module.exports = {
  todos,
};
