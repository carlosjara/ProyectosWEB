var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    db_hotel.getUsuarios(function(rows, fields) {
        res.render('usuarios', {usuarios: rows});
    });
});

router.get('/new', function (req, res) {
    db_hotel.getUsuarios(function(rows, fields) {
        res.render('usuariosNew', {usuarios: rows});
    });
});

module.exports = router;