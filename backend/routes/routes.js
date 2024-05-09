import express from "express";
import axios from "axios";

import {getAllUsuarios, getUsuario, createUsuario, deleteUsuario} from "../controllers/UsuarioController.js";
import {getAllUrgencias, getUrgencia, createUrgencia, deleteUrgencia} from "../controllers/UrgenciaController.js";
//aca arriba la extension .js puede dar un error, depende de algo que no se que es, si en algun
//momento te rompe las bolas trata de borrar el .js de esas dos lineas y a ver si se arregla

const router = express.Router();
router.get("/proxy/usuarios", async (req, res) => {
    try {
        // Realiza una solicitud a la API externa
        const response = await axios.get("https://api.scratch.mit.edu/users/NurkComics/projects");

        // Devuelve la respuesta de la API externa al cliente
        res.json(response.data);
    } catch (error) {
        // Maneja los errores de la solicitud
        res.status(500).json({ message: "Error al obtener los usuarios desde la API externa" });
    }
});

router.get("/usuarios", getAllUsuarios);

router.get("/usuario/:id", getUsuario);

router.post("/create/usuario", createUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.get("/urgencias", getAllUrgencias);

router.get("/urgencia/:id", getUrgencia);

router.post("/create/urgencia", createUrgencia);

router.delete("/urgencia/:id", deleteUrgencia);

export default router;