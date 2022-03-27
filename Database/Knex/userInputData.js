const options={
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'@Laddu123',
        database:'Informations'
    }
}
const knex=require('knex')(options);
const read=require('readline-sync');
var name=read.question("enter your name:");
var age=read.question("enter your age:");
var email=read.question("enter your eamil:");
const students=[
    {name:name,age:age,email:email}
]
knex('students').insert(students).then(() => console.log("data inserted"))
    .catch((err) => { 
        console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });