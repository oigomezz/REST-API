const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const clientes = require("./modulos/clientes/rutas");
const usuarios = require("./modulos/usuarios/rutas");
const errors = require("./red/error");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", config.app.port);

app.use("/api/clientes/", clientes);
app.use("/api/usuarios/", usuarios);
app.use(errors);

module.exports = app;
