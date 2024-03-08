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
router.post("/", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario); // Devolvemos un código 201 para indicar que se creó correctamente
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Usuario" });
  }
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