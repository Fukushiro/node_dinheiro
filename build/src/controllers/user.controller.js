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
exports.getToken = exports.findAllUser = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
const jwt_config_1 = require("../helpers/jwt-config");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body == undefined) {
            res.status(400).json({ message: 'erro' });
            return;
        }
        if (!req.body.username || !req.body.password) {
            res.status(400).json({ message: 'erro' });
            return;
        }
        const user = {
            username: req.body.username,
            password: req.body.password,
        };
        try {
            const userCreated = yield user_model_1.UserModel.create(user);
            res.status(200).json({ message: 'Sucesso' });
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ message: 'ERRO' });
        }
    });
}
exports.createUser = createUser;
function findAllUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = (yield user_model_1.UserModel.findAll()).map((v) => {
                return { username: v.username };
            });
            res.status(200).json({ message: 'Sucesso', users: users });
        }
        catch (e) {
            res.status(500).json({ message: 'erro' });
        }
    });
}
exports.findAllUser = findAllUser;
function findOneUser(req, res, next) { }
function getToken(req, res, next) {
    const token = (0, jwt_config_1.getJwt)(100 * 60, process.env.SECRET);
    res.status(200).json({ token: token });
}
exports.getToken = getToken;
