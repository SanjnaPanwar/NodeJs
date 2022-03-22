// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "data"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SEt name =  'Sanjna Pnawar' WHERE address = 'agarda'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
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
  var sql = "UPDATE student SET address = 'agarda village 24' WHERE name = 'sanjna'";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

