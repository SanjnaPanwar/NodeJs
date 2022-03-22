
// var http=require("http");

// http.createServer(function(req,res){
//     res.write("Welcome Laddo,of taklu and he is luvv uu a lot")
//     res.end()
// }).listen(8080)


var http=require("http");
http.createServer((req,res)=>{
    res.write("hello word");
    res.end();
}).listen(8080);