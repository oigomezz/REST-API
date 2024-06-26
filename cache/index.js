const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config");
const router = require("./network");

const app = express();

app.use(bodyParser.json());

// RUTAS
app.use("/", router);

const port = config.cacheService.port;

app.listen(port, () => {
  console.log(
    `Servicio de caché redis escuchando en el puerto: ${config.cacheService.port}`
  );
});
