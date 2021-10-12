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
exports.removeCarteiraValue = exports.addCarteiraValue = exports.getCarteiraByClienteController = exports.criarCarteiraController = void 0;
const carteira_model_1 = require("../models/carteira.model");
function criarCarteiraController(req, res, next) {
    if (req.body == undefined || !req.body.dinheiro || !req.body.clienteId) {
        return res
            .status(400)
            .json({ message: 'Parametros de body obrigatorios não passados' });
    }
    (0, carteira_model_1.createCarteira)(req.body.dinheiro, req.body.clienteId);
    res.status(200).json({ message: 'Sucesso ao criar cliente' });
}
exports.criarCarteiraController = criarCarteiraController;
function getCarteiraByClienteController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.params == undefined || !req.params.clienteId) {
            return res
                .status(400)
                .json({ message: 'Parametros de body obrigatorios não passados' });
        }
        const carteira = yield (0, carteira_model_1.getCarteiraByCliente)(Number(req.params.clienteId));
        res.status(200).json({ message: 'Sucesso', carteira: carteira });
    });
}
exports.getCarteiraByClienteController = getCarteiraByClienteController;
function addCarteiraValue(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body == undefined || !req.body.amount || !req.body.carteiraId) {
            return res
                .status(400)
                .json({ message: 'Parametros de body obrigatorios não passados' });
        }
        yield (0, carteira_model_1.addValueCarteira)(req.body.carteiraId, req.body.amount);
        res.status(200).json({ message: 'Sucesso' });
    });
}
exports.addCarteiraValue = addCarteiraValue;
function removeCarteiraValue(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body == undefined || !req.body.amount || !req.body.carteiraId) {
            return res
                .status(400)
                .json({ message: 'Parametros de body obrigatorios não passados' });
        }
        yield (0, carteira_model_1.removeValueCarteira)(req.body.carteiraId, req.body.amount);
        res.status(200).json({ message: 'Sucesso' });
    });
}
exports.removeCarteiraValue = removeCarteiraValue;
