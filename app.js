const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
=======

>>>>>>> f9b0056a1aa00b8ba516e5d4d2fb4fc89618c7e0

const {auth} = require("express-oauth2-jwt-bearer");
const errorHandler = require('./src/middleware/errorHandler');
const usuariosRouter = require('./src/routes/usuarios');

const autenticacion = auth({
    audience: 'http:/organizacionesperanzas.netlify.app/api/usuarios',
    issuerBaseURL: 'https://dev-ll6rcmq3e5in4er3.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', autenticacion, usuariosRouter); // Agregamos el middleware de autenticación aquí

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
