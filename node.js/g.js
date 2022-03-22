// console.log(__dirname)
// console.log(__filename)

const read=require("readline-sync")
var r=read.questionInt("enter num:");
for(let i=1;i<=10;i++){
    if(r%i==0){
        console.log(r/i);
    }

}