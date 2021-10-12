"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const UserModel = _1.sequelize.define('User', {
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    teste: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, { freezeTableName: true });
exports.UserModel = UserModel;
