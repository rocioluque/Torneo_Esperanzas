const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Ruta para obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

// Ruta para crear un nuevo Usuario
router.post("/usuarios", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario); // Devolvemos un código 201 para indicar que se creó correctamente
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Usuario" });
  }
});

router.post('/usuarios', (req, res) => {
  const accessToken = req.body.accessToken;

  // Verificar el token
  jwt.verify(accessToken, 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlV0SmRjR2E5LXpGMDJyZXpvMWhoMiJ9.eyJpc3MiOiJodHRwczovL2Rldi1sbDZyY21xM2U1aW40ZXIzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJqdTlXeFpMbnVpc3BNVjhXMDN0Qk1Tc21QSW1tbkx6SkBjbGllbnRzIiwiYXVkIjoiaHR0cDovb3JnYW5pemFjaW9uZXNwZXJhbnphcy5uZXRsaWZ5LmFwcC9hcGkvdXN1YXJpb3MiLCJpYXQiOjE3MDk5MjUxNjgsImV4cCI6MTcxMDAxMTU2OCwiYXpwIjoianU5V3haTG51aXNwTVY4VzAzdEJNU3NtUEltbW5MekoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.G2T-HKp1Fu-WkfRe_lSuGHz0-_MVp4VzjhHXUbrWv_bOLcsTLjhUG4c9tqqVnd3scFbE6bojduglehEdLOGmSeU6wEa-9hAS-YSRSi51Kg3fyQnx1gxeJnPi59hbKqTpg6mnLPpXrm-hRK_5TipLeS776vpmb9lyZBFxEmvMC7upsMCwxLtQXo01tIQ-mLTIqCeSQ256sH6Ghg2lp-aTkFibG8HPr9xXdF1eP32rPYDBCb-LfUQyGx53fV24FXrBfJOxryRUGNpLWy3VnuGeZyvDYg-Cf4D1NNXmTDu7Oh8vd7MMXihDfTExo3YI-ZrqxnDkkHiOG_oyCc8Q2ShbsA', (err, decoded) => {
      if (err) {
          // Token no válido
          return res.status(401).json({ error: 'Unauthorized' });
      }

      // El token es válido, puedes continuar con el registro del usuario
      // Accede a los datos del usuario a través de 'decoded'

      res.status(200).json({ message: 'Registro exitoso' });
  });
});

// Ruta para actualizar un Usuario existente
router.put("/:id", async (req, res) => {
  try {
    const Usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(Usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Usuario" });
  }
});

// Ruta para eliminar un Usuario
router.delete("/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Usuario" });
  }
});

module.exports = router;