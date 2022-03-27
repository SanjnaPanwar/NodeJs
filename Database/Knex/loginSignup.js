const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '@Laddu123',
        database: 'Informations'
    }
}
const knex = require('knex')(options);
const read=require("readline-sync");
var user=read.question("enter what you want login/signup or createtable/insert/update/delete :");
if (user=="signup" || user=="createtable"){

knex.schema.createTable('studentData', (table) => {
    table.increments('id')
    table.string('userName').unique()
    table.string('password').unique()
    table.string('email')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
}else if(user=="login" ){
    var userName=read.question("enter your user name:");
    var password=read.question("enter your password:");
    knex.select('id','userName','password','email').from('studentData').where('userName', userName)
      .then(data => console.log(data));
}else if (user=='insert'){  
    var userName=read.question("enter your  user name:");
    var password=read.question("enter your password :");
    var email=read.question("enter your email:");
    const studentData=[
        {userName:userName,password:password,email:email}
    ]
    knex('studentData').insert(studentData).then(() => console.log("data inserted"))
        .catch((err) => { 
            console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });
}else if(user=='update'){
    var userName=read.question("enter user name :");
    var email=read.question("enter your email :")
    knex('studentData').where({ userName: userName}).update({ userName:userName,email:email})

    .then(() => console.log("data update"))
    .catch((err) => { 
        console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
}else if(user=='delete'){
    var userName=read.question("enter user name :");
    var password=read.question("enter your password :")
    knex('studentData').where({userName:userName,password:password}, true).del()

    .then(() => console.log("data delete"))
    .catch((err) => { 
        console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
}