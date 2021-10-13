import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();
const method1 = {
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'dinheiro_production',
  port: 5432,
};

const methodDev = {
  dialect: 'sqlite',
  storage: 'db_development.sqlite3',
};

const methodProd = process.env.DATABASE_URL || '';
console.log(methodProd, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const sequelize = new Sequelize(String(process.env.DATABASE_URL));

// const db: { Sequelize: any; sequelize: any } = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

export { sequelize, Sequelize };
