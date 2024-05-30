const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config.js");
const post = require("./components/post/network");
const errors = require("../network/errors");

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use("/api/post", post);

app.use(errors);

app.set("port", config.post.port);
const port = app.get("port");

app.listen(port, () => {
  console.log(`Servicio posts escuchando en el puerto: ${port} `);
});
