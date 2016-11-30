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

exports.getUsuarios = function(complete) {
    db.executeSQLStatement(function(connection){
        connection.query('SELECT * from usuarios', function(err, rows, fields){
            if (err) throw err;
            complete(rows,fields);
        });
    });
}

exports.getHabitaciones = function(complete) {
    db.executeSQLStatement(function(connection){
        connection.query('SELECT * from habitacion', function(err, rows, fields){
            if (err) throw err;
            complete(rows,fields);
        });
    });
}

exports.getHabitacionesLibres = function(complete) {
    db.executeSQLStatement(function(connection){
        connection.query('SELECT h.* FROM hotel.habitacion h LEFT JOIN hotel.reserva r on r.habitacion = h.habitacion_id WHERE r.habitacion IS NULL', 
        	function(err, rows, fields){
            if (err) throw err;
            complete(rows,fields);
        });
    });
}

exports.insert = function(estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario, complete) {
    var params = [estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario];
    db.executeSQLStatement(function(connection){
        connection.query('insert into reserva(estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario) values(?, ?, ?, ?, ?)', params, function(err, results){
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