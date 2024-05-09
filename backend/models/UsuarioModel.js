//cada modelo es una tabla en la base de datos

//importar la conexion a la db
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UsuarioModel = db.define('usuario', {
  nombre_completo: {type: DataTypes.STRING, allowNull: false},
  telefono: {type: DataTypes.INTEGER, allowNull: false},
  email: {type: DataTypes.STRING, allowNull: false},
  fecha: {type: DataTypes.DATE, allowNull: false},
  hora: {type: DataTypes.STRING, allowNull: false},
  modalidad: {type: DataTypes.ENUM('presencial', 'videollamada', 'chat', 'a_domicilio'), allowNull: false}
})

// Crear la tabla 'usuarios' si no existe
UsuarioModel.sync({}).then(() => {
  console.log("La tabla 'usuarios' ha sido creada.");
}).catch(error => {
  console.error("Ocurrió un error al crear la tabla 'usuarios':", error);
});

export default UsuarioModel;