const Usuario = require('../models/usuarioModel');

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los Usuarios');
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.send(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el Usuario');
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        await nuevoUsuario.save();
        res.status(201).send(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el Usuario' });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.send(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el Usuario');
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const usuarioEliminado = await Usuario.findByIdAndRemove(usuarioId);
        
        res.status(200).json(usuarioEliminado);
    } catch (error) {
        res.status(500).send('Error al eliminar el Usuario');
    }
};