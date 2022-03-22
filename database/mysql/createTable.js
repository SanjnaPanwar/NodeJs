// // CREATING A TABLE
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE student (id int,name VARCHAR(255),address VARCHAR(255),age int)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });




// PRIMARY KEY using
var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Laddu123",
    database:"Informations"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="CREATE TABLE student(id int AUTO_INCREMENT,PRIMARY KEY (id) ,name VARCHAR(255),address VARCHAR(255),age int)";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("table created");
    });
});




// //ALTER TABLE
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "@Laddu123",
//   database: "Informations"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "ALTER TABLE student ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table altered");
//   });
// }); 