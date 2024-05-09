import UsuarioModel from '../models/UsuarioModel.js';
//aca arriba la extension .js puede dar un error, depende de algo que no se que es, si en algun
//momento te rompe las bolas trata de borrar el .js de esas dos lineas y a ver si se arregla

//metodos para el crud 

//mostrar todos los registros

// getAllUsuarios
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// getUsuario
export const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({message: 'Usuario no encontrado'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// createUsuario
export const createUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.create(req.body);
        res.status(201).json({message: 'Usuario creado correctamente', usuario});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// deleteUsuario
export const deleteUsuario = async (req, res) => {
    try {
        await UsuarioModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({message: 'Usuario eliminado correctamente'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// deleteAllUsuarios
export const deleteAllUsuarios = async (req, res) => {
    try {
        await UsuarioModel.destroy();
        res.json({message: 'Usuarios eliminados correctamente'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}