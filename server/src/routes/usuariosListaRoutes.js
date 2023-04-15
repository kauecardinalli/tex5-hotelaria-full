const express = require('express');
const usuariosListaRoutes = express.Router();
const UsuariosListaController = require('../controllers/usuariosListaController');

usuariosListaRoutes.get('', UsuariosListaController.getAll);
usuariosListaRoutes.put('/:id_usuario', UsuariosListaController.update)

module.exports = usuariosListaRoutes;
