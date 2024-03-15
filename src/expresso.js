const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const { check, validationResult } = require('express-validator');
const port = process.env.PORT || 3000;

const controllerLogin = require('./components/controllerLogin');

const { Pool } = require('pg');
// Crear la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'consultas',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect(error => {
  if (error) {
    console.error('Error conectando a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Middleware para servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Middleware para seguridad
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());

// Definir las rutas
app.use('/login', controllerLogin);

// Ruta para mostrar la página principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Cierre de la conexión a la base de datos cuando el servidor se apaga
process.on('SIGINT', () => {
  pool.end();
  console.log('Conexión a la base de datos cerrada');
  process.exit();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Ruta para manejar la programación de citas
app.post('/api/citas', [
  check('nombre_apellido').isLength({ min: 1 }),
  check('telefono').isMobilePhone(),
  check('correo_electronico').isEmail(),
  check('fecha').isISO8601(),
  check('hora').matches(/^([01]\d|2[0-3]):?([0-5]\d)$/),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre_apellido, telefono, correo_electronico, fecha, hora } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO citas (nombre_apellido, telefono, correo_electronico, fecha, hora) VALUES ($1, $2, $3, $4, $5)',
      [nombre_apellido, telefono, correo_electronico, fecha, hora]
    );

    res.status(200).send('Cita programada con éxito');
  } catch (error) {
    console.error('Error insertando la cita en la base de datos', error);
    res.status(500).send('Error programando la cita');
  }
});

// Ruta para obtener los datos de las consultas
app.get('/api/consultas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM urgencia');
    res.json(result.rows);
  } catch (error) {
    console.error('Error obteniendo las consultas:', error);
    res.status(500).send('Error obteniendo las consultas');
  }
});

// Ruta para manejar todas las rutas no manejadas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});