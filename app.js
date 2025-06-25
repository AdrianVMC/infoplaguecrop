const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve archivos estáticos como CSS, imágenes, y .zip
app.use(express.static(path.join(__dirname, 'public')));

// Usa tu router principal
app.use('/', indexRouter);

// Página 404 si no se encuentra una ruta
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
