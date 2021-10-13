import { envs } from '../config';

// const config = require('dotenv');
// config.config();

const out = {};
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
    url: envs.DATABASE_URL,
    // native: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  developString: {
    dialect: 'postgres',
    url: envs.DATABASE_URL,
  },
  development: {
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  },
};
