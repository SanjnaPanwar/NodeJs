// //ORDER BY  
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM student ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Laddu123",
  database: "Informations"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM student ORDER BY id DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});