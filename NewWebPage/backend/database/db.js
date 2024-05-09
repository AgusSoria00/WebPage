import { Sequelize } from "sequelize";

const db = new Sequelize("turnos_app", "root", "12345", {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
})

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

export default db;  