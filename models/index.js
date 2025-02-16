// models/index.js
const { Sequelize } = require("sequelize");
const sequelize = require("../db");
const Pregunta = require("./Pregunta");

// Inicializar modelos
Pregunta.init(sequelize);

module.exports = {
  sequelize,
  Pregunta,
};