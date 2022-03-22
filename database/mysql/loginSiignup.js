var read = require("readline-sync");
var ask = read.question("what you want login/signup:");
if (ask == "signup") {
    var choice = read.question("enter what you want to do....creatdatabase/createtable/insert/update :");
    var mysql = require("mysql");
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "@Laddu123",
        database: "loginSignup"
    });
    if (choice == "create database") {
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "@Laddu123",
        });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("CREATE DATABASE loginSignup", function (err, result) {
                if (err) throw err
                console.log("created");
            });
        });
    } else if (choice == "createtable") {
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            var sql = "CREATE TABLE loginsignupdata (id int AUTO_INCREMENT,PRIMARY KEY (id) ,name VARCHAR(255),email VARCHAR(255),password VARCHAR(255))";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("table created");
            });
        });
    } else if (choice == "insert") {
        var id;
        var name = read.question("enter your name:");
        var email = read.question("enter your email :");
        var password = read.question("enter your password please:");
        con.connect(function (err) {
            if (err) throw err;
            var sql = "INSERT INTO loginsignupdata (id,name, email,password) VALUES (" + mysql.escape(id) + "," + mysql.escape(name) + "," + mysql.escape(email) + "," + mysql.escape(password) + ")";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted, ID: " + result.insertId);
            });
        });
    } else if (choice == "update") {
        var emailValue = read.question("enter email want to update :");
        var nameValue = read.question("enter name where to update :")
        var idValue=read.question('enter id where to update data :')
        con.connect(function (err) {
            if (err) throw err;
            var sql = "UPDATE  loginsignupdata set email =?  ,  name = ? WHERE id=?";
            var query = con.query(sql, [emailValue, nameValue, idValue], function (err, result) {
                console.log("Record Updated!!");
            });
            con.end();
        })
    }

} else if (ask == "login") {
    var email = read.question("enter email  :")
    var password = read.question("enter password  :")
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "@Laddu123",
        database: "loginSignup"
    });

        con.connect(function(err) {
        if (err) throw err;
        var sql=`SELECT id,name,email,password FROM loginsignupdata WHERE  email=? and password=?`
        con.query(sql,[email,password],function(err,result,fields){
            if (err) throw err;
            console.log(result);
        });
    });
}else{
    console.log("please enter correct signup/login")
}


