const express = require('express');
const dns = require('dns');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// Los DNS de la red local rechazan las consultas SRV que necesita MongoDB Atlas
dns.setServers(['8.8.8.8', '1.1.1.1']);

// Crear el servidor de Express
const app = express();

// Data Base
dbConnection();

//Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
// CRUD de eventos (crear, leer, actualizar, eliminar)

// Escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
