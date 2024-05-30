require("dotenv").config();

module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  app: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DB || "ejemplo",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3002,
  },
  post: {
    port: process.env.POST_PORT || 3005,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT || 13556,
    password: process.env.REDIS_PASS,
  },
};
