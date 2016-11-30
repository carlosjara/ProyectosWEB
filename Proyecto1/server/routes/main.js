var express = require('express');
var router = express.Router();
var db_hotel = require('../persistence/hotel')

router.get('/', function (req, res) {
    res.redirect('/reservas');
});

module.exports = router;