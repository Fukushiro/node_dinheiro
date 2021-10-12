"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const models_1 = require("./models");
const queryInterface = models_1.sequelize.getQueryInterface();
function testeUp() {
    return __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.createTable('User', {
            id: {
                type: types_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: types_1.DataTypes.STRING,
            },
            password: {
                type: types_1.DataTypes.STRING,
            },
            createdAt: {
                type: types_1.DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: types_1.DataTypes.DATE,
                allowNull: false,
            },
        });
    });
}
function testeDown() {
    return __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.dropTable('carteira');
    });
}
