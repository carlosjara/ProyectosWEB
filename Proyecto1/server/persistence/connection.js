var mysql = require('mysql');
var exports = module.exports = {};

var pool = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'hotel' 
});

exports.executeSQLStatement = function(callback){
	pool.getConnection(function(err, connection){
		if (err) throw err;
		callback(connection);
		connection.release();
	});
};