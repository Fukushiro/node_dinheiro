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

const methodDev: { dialect: string; storage: string } = {
  dialect: 'sqlite',
  storage: 'db_development.sqlite3',
};

const methodProd = '';
let sequelize: any;
if (process.env.USAR_SQLITE == 'true') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  });
} else {
  if (process.env.USAR_SSL == 'true') {
    sequelize = new Sequelize(String(process.env.DATABASE_URL), {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    });
  } else {
    sequelize = new Sequelize(String(process.env.DATABASE_URL));
  }
}

// const db: { Sequelize: any; sequelize: any } = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
// };

export { sequelize, Sequelize };
