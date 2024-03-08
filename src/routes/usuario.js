const express = require('express');
const router = express.Router();

const {getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuarioController');

const {requireScopes} = require('express-oauth2-jwt-bearer');

router.get('/', requiredScopes('read:usuarios'), getUsuarios); 

router.get('/:id', requiredScopes('read:usuarios'), getUsuarioById);

router.post('/', requiredScopes('write:usuarios'), createUsuario);

router.put('/:id', requiredScopes('write:usuarios'), updateUsuario);

router.delete('/:id', requiredScopes('write:usuarios'), deleteUsuario);

module.exports = router;