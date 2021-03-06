// Arquivo com a configuração de conexão com o banco de dados
const { db } = require('./.env')

//exporta as configurações para db.js
module.exports = {
  client: 'postgresql',
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
