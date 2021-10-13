"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
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
console.log(methodProd);
const sequelize = new sequelize_1.Sequelize(String(process.env.DATABASE_URL));
exports.sequelize = sequelize;
