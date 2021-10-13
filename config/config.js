const config = require('dotenv');
config.config();
module.exports = {
  production: {
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'dinheiro_production',
    port: '5432',
  },
  productionString: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  development: {
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  },
};
