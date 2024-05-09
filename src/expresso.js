const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const controllerLogin = require('./components/controllerLogin');
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
app.post('/api/programar-cita', (req, res) => {
  const { nombre_apellido, telefono, correo_electronico, fecha, hora } = req.body;
  // Lógica para insertar datos en la tabla "Citas"
  // Por ejemplo:
  // INSERT INTO Citas (nombre_apellido, telefono, correo_electronico, fecha, hora) VALUES (?, ?, ?, ?, ?)
  res.send('Cita programada con éxito');
});

// Ruta para manejar la sección de emergencia
app.post('/api/emergencia', (req, res) => {
  const { nombre_apellido, telefono, correo_electronico, consulta } = req.body;
  // Lógica para insertar datos en la tabla "Consultas"
  // Por ejemplo:
  // INSERT INTO Consultas (nombre_apellido, telefono, correo_electronico, consulta) VALUES (?, ?, ?, ?)
  res.send('Solicitud recibida, se le responderá a la brevedad');
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

// Ruta para obtener información de citas y consultas (acceso solo para el administrador)
app.get('/admin/pedidos', (req, res) => {
  // Verificar la autenticación del usuario (administrador)
  // Aquí debes implementar la lógica de autenticación.
  // Si el usuario no está autenticado como administrador, redirigir o enviar un error 401

  // Lógica para obtener información de citas y consultas desde la base de datos
  // y enviarla al cliente (React)
  res.json({ citas: /* información de citas */ "", consultas: /* información de consultas */ ""});
});
