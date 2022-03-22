// var mysql=require("mysql");
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"@Laddu123",
//     database:"Informations"
// });
// con.connect(function(err){
//     if (err) throw err;
//     con.query("select * from student ",function(err,result,fields){
//         if (err) throw err;
//         console.log(result);
//     });
// });


// // SELECT COLUMN
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, age FROM student", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



// // SELECT WITH FILTER
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM student WHERE name = 'sanjna'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// WILD CHARACTER
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Laddu123",
  database: "Informations"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM student WHERE name LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});