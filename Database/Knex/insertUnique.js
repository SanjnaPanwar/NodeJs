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

const cities = [
    { name: 'Audi', state: 'mp' },
    { name: 'Mercedes', state:'uk' },
    { name: 'Skoda', state: 'kolkata' },
    { name: 'Volvo', state: 'up' },
    { name: 'Bentley', state: 'tamil nadu' },
    { name: 'Citroen', state: 'gujrat' },
    { name: 'Hummer', state: 'punjab' },
    { name: 'Volkswagen', state: 'himachal' },
]

knex('cities').insert(cities).then(() => console.log("data inserted"))
    .catch((err) => { 
        console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
