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
var id=read.question("enter id :")
var name=read.question("enter name :");
var state=read.question("enter your state :")

// knex('students').where({ id: 2 }).update({ name: "The Hitchhiker's Guide to the Galaxy" }, ['id', 'title'])
knex('cities').where({ id: id}).update({ name:name,state:state})

.then(() => console.log("data update"))
  .catch((err) => { 
      console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });