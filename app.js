const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Railway asigna un puerto dinámico en la variable de entorno PORT
const PORT = process.env.PORT || 8080;

// 1. Servir archivos estáticos (HTML, CSS, imágenes, .zip)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Usar el router principal (sirve index.html)
app.use('/', indexRouter);

// 3. Página 404 personalizada si la ruta no existe
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// 4. Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
