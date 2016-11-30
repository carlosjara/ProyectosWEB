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

/*exports.insert = function(estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario, complete) {
    var params = [estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario];
    db.executeSQLStatement(function(connection){
        connection.query('insert into reserva(estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario) values(?, ?, ?, ?, ?)', params, function(err, results){
            if (err) throw err;
            complete(results);
        });
    });
}*/

exports.insert = function(estado_reserva, fecha_inicio, fecha_fin, complete) {
    var params = [estado_reserva, fecha_inicio, fecha_fin];
    db.executeSQLStatement(function(connection){
        connection.query('insert into reserva(estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario) values(?, ?, ?, 1, 1)', params, function(err, results){
            if (err) throw err;
            complete(results);
        });
    });
}

exports.delete = function(reserva_id, complete) {
    var params = [reserva_id];
    db.executeSQLStatement(function(connection){
        connection.query('delete from reserva where reserva_id = ?', params, function(err, results){
            if (err) throw err;
            complete(results);
        });
    });
}