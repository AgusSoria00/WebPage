//cada modelo es una tabla en la base de datos

//importar la conexion a la db
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UrgenciaModel = db.define('urgencia', {
    //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true},
    nombre_completo: {type: DataTypes.STRING},
    telefono: {type: DataTypes.NUMBER},
    email: {type: DataTypes.STRING},
    consulta: {type: DataTypes.STRING}
})

export default UrgenciaModel;