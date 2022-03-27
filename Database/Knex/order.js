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

knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });