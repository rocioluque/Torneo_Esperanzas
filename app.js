const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Conexión a MongoDB (ajusta la URL según tu configuración)
mongoose.connect('mongodb://127.0.0.1:27017/OrganizacionEsperanzas', {});

// Definición del esquema de usuario
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    contrasena: String,
    institucion: String
}, {
  collection: 'usuarios'
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Configuración de body-parser para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar la solicitud de registro
app.post('/registro', async (req, res) => {
  
  const { nombre, apellido, email, contrasena, institucion } = req.body;
console.log(req.body); 
  try {
      // Verificar si el usuario ya existe por su dirección de correo electrónico
      const usuarioExistente = await Usuario.findOne({ email });

      if (usuarioExistente) {
          // El usuario ya está registrado
          return res.status(409).send('Error: El usuario ya está registrado');
      }

      // Crear un nuevo usuario
      const nuevoUsuario = new Usuario({
          nombre,
          apellido,
          email,
          contrasena,
          institucion
      });

      // Guardar el nuevo usuario en la base de datos
      await nuevoUsuario.save();

      return res.status(201).send('Registro exitoso');
  } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
  }
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
