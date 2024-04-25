require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT || 5555,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DB || "ejemplo",
  },
};
