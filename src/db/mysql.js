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
      console.error(`DB error:`, err);
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
      return error ? reject(error) : resolve(result);
    });
  });
};

const uno = (tabla, id) => {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
};

const agregar = (tabla, data) => {
  return new Promise((resolve, reject) => {
    conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
};

const actualizar = (tabla, data) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      `UPDATE ${tabla} SET ? WHERE id = ?`,
      [data, data.id],
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
};

const eliminar = (tabla, data) => {
  const { id } = data;
  return new Promise((resolve, reject) => {
    conexion.query(`DELETE FROM ${tabla} WHERE id=${id}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
};

module.exports = {
  todos,
  uno,
  agregar,
  actualizar,
  eliminar,
};
