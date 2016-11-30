var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    db_hotel.getReservas(function(rows, fields) {
        res.render('index', {reservas: rows});
    });
});

module.exports = router;