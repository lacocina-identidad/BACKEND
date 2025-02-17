const express = require("express");
const cors = require("cors"); // Importa el paquete cors
const app = express();
const routes = require("./routes");

// Middleware para parsear JSON
app.use(express.json());

// Configura CORS
app.use(cors({
  origin: "http://localhost:3001", // Permite solicitudes desde este origen
  methods: "GET,POST,PUT,DELETE", // Métodos HTTP permitidos
  credentials: true, // Permite el envío de credenciales (cookies, headers de autenticación, etc.)
}));

app.get('/', (req, res) => {
  res.send('¡Hola desde Vercel!');
});
// Rutas
app.use("/api", routes);

module.exports = app;
