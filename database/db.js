import { Sequelize } from "sequelize";

//Configuración de la base de datos, tenes que reemplazar los parametros 
//cuando crees la base de datos desde afuera que es mas facil
const db = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql"
})

export default db;