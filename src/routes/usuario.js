const express = require('express');
const router = express.Router();

const {getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuarioController');

const {requireScopes} = require('express-oauth2-jwt-bearer');

router.get('/', requireScopes('read:usuarios'), getUsuarios); 

router.get('/:id', requireScopes('read:usuarios'), getUsuarioById);

router.post('/', requireScopes('write:usuarios'), createUsuario);

router.put('/:id', requireScopes('write:usuarios'), updateUsuario);

router.delete('/:id', requireScopes('write:usuarios'), deleteUsuario);

module.exports = router;