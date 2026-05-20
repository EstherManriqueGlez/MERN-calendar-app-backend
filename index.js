const express = require('express');
require('dotenv').config();

// Crear el servidor de Express
const app = express();

//Directorio Público
app.use(express.static('public'));

// Rutas
// app.get('/', (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

// Escuchar peticiones en el puerto 4000
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
