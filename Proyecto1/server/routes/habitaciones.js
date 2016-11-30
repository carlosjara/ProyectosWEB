var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    db_hotel.getHabitaciones(function(rows, fields) {
        res.render('habitaciones', {habitaciones: rows});
    });
});

module.exports = router;