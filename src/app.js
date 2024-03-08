const express = require('express');

const {auth} = require('express-oauth2-jwt-bearer');
const errorHandler = require('./middlewares/errorHandler');

require ('dotenv').config();

const oauthCheck = auth({
  audience: 'http:/organizacionesperanzas.netlify.app/api/usuarios',
  issuerBaseURL: 'https://dev-ll6rcmq3e5in4er3.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

const app = express();
app.use(express.json());

const usuariosRouter = require('./routes/usuario');

app.use('/api/usuarios', oauthCheck, usuariosRouter);

app.use(errorHandler);

// Iniciar el servidor
app.listen(3000, () => {
    console.log(`Servidor iniciado en el puerto 3000`);
});

module.exports = app;