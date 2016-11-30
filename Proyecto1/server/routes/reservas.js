var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    db_hotel.getReservas(function(rows, fields) {
        res.render('index', {reservas: rows});
    });
});

router.get('/new', function (req, res) {
    res.render('form');
});

router.get('/new/:user-:hab', function(req, res) {
    var usuario_id = req.params.user;
    var habitacion_id = req.params.hab;
    res.render('form', {usuario: usuario_id, habitacion: habitacion_id});
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;

    db_hotel.delete(id, function(results) {
        res.redirect('/reservas');
    });
});

router.post('/', function(req, res) {
    var inicio = req.body.inicio_1 + "-" + req.body.inicio_2 + "-" + req.body.inicio_3;
    var fin = req.body.fin_1 + "-" + req.body.fin_2 + "-" + req.body.fin_3;
    
    db_hotel.insert(req.body.estado, inicio, fin, req.body.habitacion, req.body.usuario, function(results) {
        res.redirect('/reservas');
    });
});

module.exports = router;