var express = require('express');
var router = express.Router();

// Array de imágenes o elementos
const imagenes = [
    { nombre: "Gato 1", url: "/images/gato1.jpg" },
    { nombre: "Gato 2", url: "/images/gato2.jpg" },
    { nombre: "Gato 3", url: "/images/gato3.jpg" }
];

/* Página principal */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Galería de Gatos 🐱', imagenes });
});

/* Página de login */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Iniciar Sesión' });
});

module.exports = router;
