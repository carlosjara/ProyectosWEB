var db = require('./connection');
var exports = module.exports = {};

exports.getReservas = function(complete) {
    db.executeSQLStatement(function(connection){
        connection.query('SELECT * from reserva', function(err, rows, fields){
            if (err) throw err;
            complete(rows,fields);
        });
    });
}