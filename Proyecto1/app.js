var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var path = require('path');

// Express configuration
var app = express();
app.use(express.static('public'));

// Handlebars configuration
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'server/views'));

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./server/routes/main'));
app.use('/reservas', require('./server/routes/reservas'));

app.listen(3000);