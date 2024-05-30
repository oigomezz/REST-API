const mysql = require("mysql2");
const config = require("../config");

const dbconfig = {
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;

function handleConnection() {
  connection = mysql.createConnection(dbconfig);

  connection.connect((err) => {
    if (err) {
      console.error(`DB error:`, err);
      setTimeout(connect_to_mysql, 2000);
    } else console.log("DB conectada");
  });

  connection.on("error", (err) => {
    console.error(`DB error: ${err}`);
    if (err.code === "PROTOCOL_CONNECTION_LOST") connect_to_mysql();
    else throw err;
  });
}

handleConnection();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE id=${id}`,
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (error, result) => {
        return error ? reject(error) : resolve(result);
      }
    );
  });
}

function upsert(table, data) {
  if (data?.id) return update(table, data);
  else return insert(table, data);
}

function query(table, query, join) {
  let joinQuery = "";
  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
  }

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`,
      query,
      (error, result) => {
        return error ? reject(error) : resolve(result[0] || null);
      }
    );
  });
}

module.exports = {
  list,
  get,
  upsert,
  query,
};
