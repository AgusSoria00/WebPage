const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Ruta para mostrar la página principal
app.get('/', (req, res) => {
  // Lógica para enviar la página principal
  res.send('¡Hola, mundo!');
});

// Ruta para manejar la programación de citas
app.post('/programar-cita', (req, res) => {
  // Lógica para procesar el formulario de programación de citas
  // Puedes acceder a los datos del formulario utilizando req.body
  // Por ejemplo: const nombre = req.body.nombre;
  res.send('Cita programada con éxito');
});

// Ruta para manejar la sección de emergencia
app.post('/emergencia', (req, res) => {
  // Lógica para procesar el formulario de emergencia
  // Puedes acceder a los datos del formulario utilizando req.body
  // Por ejemplo: const nombre = req.body.nombre;
  res.send('Solicitud recibida, se le respondera a la brevedad');
});

app.get('/api/articulos', (req, res) => {
    // Lógica para obtener y devolver la lista de artículos desde la base de datos
    res.json(/* Lista de artículos */);
});

app.get('/api/videos', (req, res) => {
    // Lógica para obtener y devolver la lista de videos desde el servidor
    res.json(/* Lista de videos */);
});
  
// Manejo de rutas para la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});

