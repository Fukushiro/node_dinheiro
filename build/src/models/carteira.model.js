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
exports.removeValueCarteira = exports.addValueCarteira = exports.getCarteiraByCliente = exports.createCarteira = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const cliente_model_1 = require("./cliente.model");
const CarteiraModel = _1.sequelize.define('carteira', {
    dinheiro: { type: sequelize_1.DataTypes.FLOAT, defaultValue: 0, allowNull: false },
}, { freezeTableName: true });
CarteiraModel.belongsTo(cliente_model_1.ClienteModel, { foreignKey: 'ClienteId' });
function createCarteira(dinheiro, clienteId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield CarteiraModel.create({ dinheiro: dinheiro, ClienteId: clienteId });
    });
}
exports.createCarteira = createCarteira;
function getCarteiraByCliente(clienteId) {
    return __awaiter(this, void 0, void 0, function* () {
        const carteira = yield CarteiraModel.findAll({
            where: { ClienteId: clienteId },
        });
        return carteira;
    });
}
exports.getCarteiraByCliente = getCarteiraByCliente;
function addValueCarteira(carteiraId, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const carteira = yield CarteiraModel.findOne({
            where: { id: carteiraId },
        });
        if (carteira != null) {
            yield CarteiraModel.update({ dinheiro: carteira.dinheiro + amount }, { where: { id: carteiraId } });
        }
    });
}
exports.addValueCarteira = addValueCarteira;
function removeValueCarteira(carteiraId, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const carteira = yield CarteiraModel.findOne({
            where: { id: carteiraId },
        });
        if (carteira != null && carteira.dinheiro - amount >= 0) {
            yield CarteiraModel.update({ dinheiro: carteira.dinheiro - amount }, { where: { id: carteiraId } });
        }
    });
}
exports.removeValueCarteira = removeValueCarteira;
