import UsuarioModel from '../models/UsuarioModel.js';
//aca arriba la extension .js puede dar un error, depende de algo que no se que es, si en algun
//momento te rompe las bolas trata de borrar el .js de esas dos lineas y a ver si se arregla

//metodos para el crud

//mostrar todos los registros

export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({message: error});
    }
}

//mostrar un solo registro

export const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(usuario);
    } catch (error) {
        res.json({message: error});
    }
}

//crear un registro

export const createUsuario = async (req, res) => {
    try {
        await UsuarioModel.create(req.body);
        res.json({message: 'Usuario creado correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}

//editar un registro me parece que no va a ser necesario, sino me avisas y lo hago, si no hace falta borralo que no quede al pedo

export const editUsuario = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//eliminar un registro

export const deleteUsuario = async (req, res) => {
    try {
        UsuarioModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({message: 'Usuario eliminado correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}

//eliminar todos los registros

export const deleteAllUsuarios = (req, res) => {
    try {
        UsuarioModel.destroy();
        res.json({message: 'Usuarios eliminados correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}