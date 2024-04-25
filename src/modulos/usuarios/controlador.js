const TABLA = "usuarios";

module.exports = function (dbInyectada) {
  let db = dbInyectada;

  if (!db) db = require("../../db/mysql");

  const todos = () => db.todos(TABLA);
  const uno = (id) => db.uno(TABLA, id);
  const agregar = (data) => db.agregar(TABLA, data);
  const actualizar = (data) => db.actualizar(TABLA, data);
  const eliminar = (data) => db.eliminar(TABLA, data);

  return {
    todos,
    uno,
    agregar,
    actualizar,
    eliminar,
  };
};
