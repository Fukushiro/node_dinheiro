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
exports.getClientByName = exports.getClienteById = exports.createCliente = exports.ClienteModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const bcriptManager_1 = require("../helpers/bcriptManager");
const ClienteModel = _1.sequelize.define('Cliente', {
    username: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { freezeTableName: true });
exports.ClienteModel = ClienteModel;
function createCliente(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = username;
        const pass = yield (0, bcriptManager_1.encript)(password);
        return yield ClienteModel.create({ username: name, password: pass });
    });
}
exports.createCliente = createCliente;
function getClienteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const cliente = yield ClienteModel.findByPk(id, {
            attributes: ['username'],
        });
        return cliente;
    });
}
exports.getClienteById = getClienteById;
function getClientByName(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = username;
        const cliente = yield ClienteModel.findOne({
            where: { username: name },
            attributes: ['id', 'username', 'password'],
        });
        return cliente;
    });
}
exports.getClientByName = getClientByName;
