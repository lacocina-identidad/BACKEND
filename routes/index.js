// routes/index.js
const express = require("express");
const router = express.Router();
const preguntaRoutes = require("./PreguntaRoutes");

// Usar las rutas de preguntas
router.use("/preguntas", preguntaRoutes);

module.exports = router;