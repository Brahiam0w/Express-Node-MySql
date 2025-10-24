// Importar express
const express = require('express');
const app = express();

// Puerto del servidor
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
