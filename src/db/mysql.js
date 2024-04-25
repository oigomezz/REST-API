const mysql = require("mysql2");
const config = require("../config");

const dbconfig = {
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let conexion;

const connect_to_mysql = () => {
  conexion = mysql.createConnection(dbconfig);

  conexion.connect((err) => {
    if (err) {
      console.error(`DB error: ${err}`);
      setTimeout(connect_to_mysql, 2000);
    } else {
      console.log("DB conectada");
    }
  });

  conexion.on("error", (err) => {
    console.error(`DB error: ${err}`);
    if (err.code === "PROTOCOL_CONNECTION_LOST") connect_to_mysql();
    else throw err;
  });
};

connect_to_mysql();

const todos = (tabla) => {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
};

const uno = (tabla, id) => {
  return `Registro con el id:${id}`;
};

const agregar = (tabla, data) => {
  return `Agregar registro con la data:${id}`;
};

const eliminar = (tabla, id) => {
  return `Eliminar registro con el id:${id}`;
};

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
