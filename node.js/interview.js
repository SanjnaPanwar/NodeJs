// // reduce
// let arr=[1,2,3,4];
// let sum =arr.reduce((accumulator,current)=>{
//     return accumulator+current;
// });
// console.log(sum);



// filter
// function isEven(value){
//     return value%2==0;
// }
// function func(){
//     var filtered=[12,34,65,89,44,90,9].filter(isEven);
//     console.log(filtered);
// }
// func();
 
// // map
// const array=["laddu","sanju","sanjna"];
// const arrName=array.map(function(value){
//     return value+"panwar";
// })
// console.log(array);
// console.log(arrName)



// i=0
// do{
//     console.log(i)
//     i++
// }
// while(i<=-1)


// var a;
// console.log(a)



// // call() method
// const obj={
//     name:"sanjna",
//     age:21,
//     content:"Advance js",
//     feature:function(){
//         console.log(`she is ${this.name} and her age is ${this.age} and she is doing ${this.content}`);
//     }
// }
// const obj1={
//     name:"Laddu",
//     age:20,
//     content:"Next NodeJs"
// }
// obj.feature.call(obj1)



// // bind() 
// const a={
//     nickname:"laddu",
//     family:"love",
//     member:"5 members",
//     feature:function(about){
//         console.log(`her name is ${this.nickname} and family is her ${this.family} in her family there are ${this.member}...thats all about her ${about} .`);
//     }
// }
// let y=a.feature.bind(a,("anytime"));
// y();


// // apply () 
// const a={
//     name:"sanjna",
//     content:"Javascript",
//     feature:function(script,some){
//         console.log(`her name is ${this.name} and her topic is ${this.content} on topic ${script} about some more ${some}`);
//     }
// }
// const b={
//     name:"laddu",
//     content:"Advance JavaScript"
// }
// a.feature.apply(b,["progress is good","information"])




// // promise
// const obj1=new Promise((resolve,reject)=>{
//     const n="sanjna";
//     const s="sanjna";
//     if(n===s){
//         resolve();
//     }else{
//         reject();
//     }
// });
// obj1.then(()=>{
//     console.log("success");
// }).catch(()=>{
//     console.log("error")
// });



// question
// output = [0, 0, 1, 2, 3, 4, 5]
// 1st
// const a=[3,2,0,1,4,5,0];
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             var temp=a[i];
//             a[i]=a[j];
//             a[j]=temp;
//         }
//     }
// }
// console.log(a)



// // output = [1,3,4,5,0,0]
// // 2nd
// const a=[0,1,3,0,4,5];
// var nonzero=[];
// var zero=[];
// for(let i=0;i<a.length;i++){
//     if (a[i]!=0){
//         nonzero.push(a[i])
//     }
//     else{
//         zero.push(a[i])
//     }
// }
// const aspct=[...nonzero,...zero];
// console.log(aspct)




// // unique key and occurance sum value
// const a=[1,2,3,1,4,5,3,4,2,1]
// var unique=[];
// for(var i of a){
//     if (!unique.includes(i)){
//         unique.push(i)
//     }
// }
// // console.log(unique)
// var obj={};


// // 3rd
// var number_list = [1,2,3,1,4,5,3,4,2,1,4,5]
// var uniques=[]
// var dict={}
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
// for(var j of uniques){
//     var count=0;
//     for(var k of number_list){
//         if (j === k){
//             count+=1;
//         }
//     }
//     dict[j]=j*count
// }
// console.log(dict)


// 4th maching key update value
const read=require("readline-sync");
var key=read.question("enter any key:")
var value=read.questionInt("enter any number:")
var a={
    sum:{
        a:5,
        b:10,
        c:15
    }
}
var final={}
for (let i in a){
    var New={}
    for(let j in a[i]){
        if(j==key){
            New[j]=a[i][j]+value;

        }
        else{
            New[j]=a[i][j]
        }
    }
    final[i]=New
}
console.log(final)


