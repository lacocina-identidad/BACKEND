// app.js
const express = require("express");
const app = express();
const routes = require("./routes");

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api", routes);

module.exports = app;