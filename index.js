const express = require('express');
require('dotenv').config();

// Crear el servidor de Express
const app = express();

//Directorio Público
app.use(express.static('public'));

// Rutas
app.use('/api/auth', require('./routes/auth'));
// CRUD de eventos (crear, leer, actualizar, eliminar)

// Escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
