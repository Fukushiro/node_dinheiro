"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
// dialect: 'sqlite',
// storage: 'db_development.sqlite3',
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'dinheiro_production',
    port: 5432,
});
exports.sequelize = sequelize;
