const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/OrganizacionEsperanzas", {}); 

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    contrasena: String,
    institucion: String
}, {collection: 'usuarios'});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;