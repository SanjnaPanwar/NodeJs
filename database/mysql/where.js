var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Laddu123",
  database: "data"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Agarda highway 24'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});