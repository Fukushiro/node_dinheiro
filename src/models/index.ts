import { Sequelize } from 'sequelize';
// dialect: 'sqlite',
// storage: 'db_development.sqlite3',
const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'dinheiro_production',
  port: 5432,
});

// const db: { Sequelize: any; sequelize: any } = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

export { sequelize, Sequelize };
