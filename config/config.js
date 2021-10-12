const fs = require('fs');

module.exports = {
  production: {
    dialect: 'sqlite',
    storage: 'db_prod.sqlite3',
  },
  development: {
    dialect: 'sqlite',
    storage: 'db_development.sqlite3',
  },
};
