module.exports = {
  production: {
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'dinheiro_production',
    port: '5432',
  },
  development: {
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  },
};
