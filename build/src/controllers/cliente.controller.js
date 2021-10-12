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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateCliente = exports.getClienteByPk = exports.criarClienteController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cliente_model_1 = require("../models/cliente.model");
const carteira_model_1 = require("../models/carteira.model");
function criarClienteController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body == undefined || !req.body.username || !req.body.password) {
            return res
                .status(400)
                .json({ message: 'Parametros de body obrigatorios não passados' });
        }
        const cliente = yield (0, cliente_model_1.createCliente)(req.body.username, req.body.password);
        (0, carteira_model_1.createCarteira)(0, cliente.id);
        res.status(200).json({ message: 'Sucesso ao criar cliente' });
    });
}
exports.criarClienteController = criarClienteController;
function getClienteByPk(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.params.id) {
            res.status(400).json({ message: 'Id não informado' });
        }
        const id = Number(req.params.id);
        const cliente = yield (0, cliente_model_1.getClienteById)(id);
        res.status(200).json({ message: 'Sucesso', cliente: cliente });
    });
}
exports.getClienteByPk = getClienteByPk;
function authenticateCliente(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: 'Credenciais não informadas' });
        }
        const cliente = yield (0, cliente_model_1.getClientByName)(req.body.username);
        if (!cliente ||
            !(yield bcrypt_1.default.compare(req.body.password, cliente.password))) {
            return res
                .status(400)
                .json({ message: 'Credenciais erradas', auth: false });
        }
        return res.status(200).json({
            message: 'Sucesso',
            auth: true,
            cliente: { id: cliente.id, username: cliente.username },
        });
    });
}
exports.authenticateCliente = authenticateCliente;
