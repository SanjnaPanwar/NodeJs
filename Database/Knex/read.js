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
var userName=read.question("enter your user name:");
var password=read.question("enter your password:");

knex.select('id','userName','password','email').from('studentData').where('userName', userName)
  .then(data => console.log(data));