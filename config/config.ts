import { envs } from '../config';

// const config = require('dotenv');
// config.config();

const out = {
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
    native: true,
    ssl: true,
  },
  development: {
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  },
  heroku: {
    dialect: 'postgres',
    native: true,
    ssl: true,
    // dialect: 'postgres',
    // username: 'vofdcnjzbunwni',
    // password:
    //   'f55923a6bd027ff75c69e756bf2eda1c0c97250e34d3fd9e7a388def7c4b0670',
    // host: 'ec2-54-166-37-125.compute-1.amazonaws.com',
    // database: 'delteorkpmtfum',
    // port: '5432',
    url: 'postgres://vofdcnjzbunwni:f55923a6bd027ff75c69e756bf2eda1c0c97250e34d3fd9e7a388def7c4b0670@ec2-54-166-37-125.compute-1.amazonaws.com:5432/delteorkpmtfum',
  },
};
module.exports = out;
