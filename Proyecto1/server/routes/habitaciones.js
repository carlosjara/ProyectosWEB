var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    db_hotel.getHabitaciones(function(rows, fields) {
        res.render('habitaciones', {habitaciones: rows});
    });
});

router.get('/new/:id', function(req, res) {
    var user_id = req.params.id;

    db_hotel.getHabitacionesLibres(function(rows, fields) {
        res.render('habitacionesNew', {user: user_id, habitaciones: rows});
    });
});

module.exports = router;