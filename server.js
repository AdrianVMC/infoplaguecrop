const express = require('express');
const path = require('path');
const app = express();

// Sirve la carpeta "public" como estática
app.use(express.static(path.join(__dirname, 'public')));

// Cuando visiten "/", sirve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
