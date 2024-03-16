import express from "express";

import {getAllUsuarios, getUsuario, createUsuario, deleteUsuario} from "../controllers/UsuarioController.js";
import {getAllUrgencias, getUrgencia, createUrgencia, deleteUrgencia} from "../controllers/UrgenciaController.js";
//aca arriba la extension .js puede dar un error, depende de algo que no se que es, si en algun
//momento te rompe las bolas trata de borrar el .js de esas dos lineas y a ver si se arregla

const router = express.Router();

router.get("/usuarios", getAllUsuarios);

router.get("/usuario/:id", getUsuario);

router.post("/create/usuario", createUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.get("/urgencias", getAllUrgencias);

router.get("/urgencia/:id", getUrgencia);

router.post("/create/urgencia", createUrgencia);

router.delete("/urgencia/:id", deleteUrgencia);

export default router;