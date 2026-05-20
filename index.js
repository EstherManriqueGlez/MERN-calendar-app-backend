const express = require('express');

// Crear el servidor de Express
const app = express();

// Rutas
app.get('/', (req, res) => {
  res.json({
    ok: true,
  });
});

// Escuchar peticiones en el puerto 4000
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`);
});
