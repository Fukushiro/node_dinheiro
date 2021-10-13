import { Sequelize } from 'sequelize';

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
const methodProd: string = process.env.DATABASE_URL || '';
const sequelize = new Sequelize(methodProd);

// const db: { Sequelize: any; sequelize: any } = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

export { sequelize, Sequelize };
