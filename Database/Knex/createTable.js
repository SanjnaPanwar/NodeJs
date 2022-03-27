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

knex.schema.createTable('cars', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });




    // const Query = `CREATE TABLE Student(
    //     id SERIAL,
    //     name VARCHAR(20),
    //     email VARCHAR(50),password VARCHAR(20));
    //     `knex.raw(Query).then(() =>{
    //     console.log(“Table created successfully!!”)
    //     }).catch(()=.{
    //     console.log(“Error occurred in table creation!!”)
    //     });