// index.js
const app = require("./app");
const sequelize = require("./db");

const port = 25773 || 3000;

// Sincronizar la base de datos y luego iniciar el servidor
sequelize
  .sync({ force: false }) // force: true solo para desarrollo
  .then(() => {
    console.log("Base de datos sincronizada");
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });
