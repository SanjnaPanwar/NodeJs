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

knex.schema.createTable('cities', (table) => {
    table.increments('id')
    table.string('name').unique()
    table.string('state')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });


// knex.schema.createTable('users', function(t) {
//     t.increments();
//     t.string('email').unique().collate('utf8_unicode_ci');
//   });