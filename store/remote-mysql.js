const remote = require("./remote");
const config = require("../config");

const host = config.mysqlService.host;
const port = config.mysqlService.port;

module.exports = new remote(host, port);
