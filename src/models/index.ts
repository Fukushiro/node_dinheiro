import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite3',
});

// const db: { Sequelize: any; sequelize: any } = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

export { sequelize, Sequelize };
