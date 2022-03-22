// var buf = new Buffer('Simply Easy Learning');
// var json = buf.toJSON(buf);

// console.log(json);


// var buffer1 = new Buffer('TutorialsPoint ');
// var buffer2 = new Buffer('Simply Easy Learning');
// var buffer3 = Buffer.concat([buffer1,buffer2]);

// console.log("buffer3 content: " + buffer3.toString());


// var frosty = Buffer.alloc(24)
// var snowman = Buffer.from("☃", "utf-8")
// frosty.write("Happy birthday! ", "utf-8")
// snowman.copy(frosty, 16)
// frosty.toString("utf-8", 0, 19)
// // 'Happy birthday! ☃'
// console.log(snowman)
// console.log(frosty)

// const buff=[12,34,56,67];
// console.log(buff[5])



var buffer=Buffer.alloc(12);
console.log(buffer);