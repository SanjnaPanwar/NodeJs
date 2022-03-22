// var mysql=require("mysql");
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"@Laddu123",
//     database:"Informations"
// });
// var id = 0
// var name = 'sanjna';
// var address = "agarda";
// var age = 21;
// con.connect(function(err){

// var sql = "INSERT INTO student (id ,name,address,age) VALUES (" + mysql.escape(id) + "," + mysql.escape(name) + "," + mysql.escape(address) + "," + age + ")" ;

// //     var sql=`INSERT INTO students(id,name,address,age) VALUES(1,sanjna,agarda,21)`;
//     con.query(sql,function(err,result){
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });


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
//   var sql = "INSERT INTO  student (id,name, address ,age) VALUES ?";
//   values=[['1','priyank', 'Highway 37',12],
//   ['2','chhaya', 'siraliya',23],
//   ['3','karuna', 'nanasa',34],
//   ['4','mona', 'kannod',45],
//   ['5','saloni', 'pune',56],
//   ['6','jyoti', 'khategaon',67],
//   ['7','roshni', 'banglore',677],
//   ['8','pooja', 'abcd',78],
//   ['9','sapna', 'uk',89],
//   ['10','neha', 'delhi',90],
//   ['11','yogita', 'kannod',56]]
//   con.query(sql,[values],function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
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
  var sql = "INSERT INTO student (id,name, address,age) VALUES ('13','Michelle', 'Blue Village 1','43')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});