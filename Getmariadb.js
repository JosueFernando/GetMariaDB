const express = require('express');
const app = express();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "empleado"
});

connection.connect();

app.get('/rest/empleado', function (req, res) {

   
    connection.query('SELECT * FROM empleados', function (error, results, fields)  {
	if (error) throw error;
	return res.send({ error: false, data: results, message: 'Todos list'});


});

	});

app.listen(6666, function () {
 console.log('Node app is running on port 6666');

});