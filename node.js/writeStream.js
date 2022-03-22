var fs=require("fs");
var data='simply easy learning';
var writeStream=fs.createWriteStream("output.txt");
writeStream.write(data,"UTF-8");
writeStream.end();
writeStream.on("finish",function(){
    console.log("write complete");
});
writeStream.on("error",function(err){
    console.log(err.stack);
});
console.log("program ended");