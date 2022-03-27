


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

// cities
// cars    
knex('cities')
  .join('cars', 'cities.id', '=', 'cars.id')
  .select('cities.name','cars.price')
    .then(() => console.log("table joined"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });


