import express from "express";
import cors from "cors";
//importar conexion a la db
import db from "./database/db.js";
//importar enrutador
import router from "./routes/routes.js";
import 'dotenv/config';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

import axios from 'axios';

axios.get('http://localhost:3001/api/create/usuario')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  const createUsuario = async (req, res) => {
    try {
      const newUsuario = {
        // your new usuario object properties
      };
  
      const usuarioCreated = await Usuario.create(newUsuario);
      res.status(201).json(usuarioCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating usuario" });
    }
  };

const corsOptions = {
    origin: 'http://localhost:3000', // Permitir solicitudes solo desde el frontend
    optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11) interpretaban mal los códigos de éxito
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

try {
    await db.authenticate();
    console.log("Connection has been established successfully");
} catch (error) {
    console.log(`The connection error is: ${error}`);
}

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.post("/api/create/usuario", createUsuario);
app.listen(3001, () => {
    console.log("Server running on port 3001");
})
