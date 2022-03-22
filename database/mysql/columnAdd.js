var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Laddu123",
  database: "Informations"
});
con.connect(function(err) {
  if (err) throw err;
  var sql = "ALTER TABLE student ADD COLUMN Phone_number VARCHAR(20) NOT NULL AFTER Name;  ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});