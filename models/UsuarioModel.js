//cada modelo es una tabla en la base de datos

//importar la conexion a la db
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UsuarioModel = db.define('usuarios', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true},
    nombre_completo: {type: DataTypes.STRING},
    telefono: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    hora: {type: DataTypes.TIME},
    modalidad: {type: DataTypes.ENUM('presencial', 'videollamada', 'chat', 'a_domicilio')}
})

export default UsuarioModel;