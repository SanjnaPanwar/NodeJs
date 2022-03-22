// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM student LIMIT 8";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// STAR FROM ANOTHER  POSITION
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Laddu123",
  database: "Informations"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM student LIMIT 2,5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});