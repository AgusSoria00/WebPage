import UrgenciaModel from '../models/UrgenciaModel.js'; 
//aca arriba la extension .js puede dar un error, depende de algo que no se que es, si en algun
//momento te rompe las bolas trata de borrar el .js de esas dos lineas y a ver si se arregla

//metodos para el crud

//mostrar todos los registros

export const getAllUrgencias = async (req, res) => {
    try {
        const urgencias = await UrgenciaModel.findAll();
        res.json(urgencias);
    } catch (error) {
        res.json({message: error});
    }
}

//mostrar un solo registro

export const getUrgencia = async (req, res) => {
    try {
        const urgencia = await UrgenciaModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(urgencia[0]);
    } catch (error) {
        res.json({message: error});
    }
}

//crear un registro

export const createUrgencia = async (req, res) => {
    try {
        await UrgenciaModel.create(req.body);
        res.json({message: 'Urgencia creada correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}

//editar un registro me parece que no va a ser necesario, sino me avisas y lo hago, si no hace falta borralo que no quede al pedo

export const editUrgencia = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//eliminar un registro

export const deleteUrgencia = async (req, res) => {
    try {
        UrgenciaModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({message: 'Urgencia eliminada correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}

//eliminar todos los registros

export const deleteAllUrgencias = (req, res) => {
    try {
        UrgenciaModel.destroy();
        res.json({message: 'Urgencias eliminadas correctamente'});
    } catch (error) {
        res.json({message: error});
    }
}