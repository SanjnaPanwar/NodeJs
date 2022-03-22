var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Laddu123"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("CREATE DATABASE Informations",function (err,result){
        if(err) throw err
        console.log("created");
    });
});