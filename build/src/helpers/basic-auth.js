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
exports.basicAuth = void 0;
const basic_auth_1 = __importDefault(require("basic-auth"));
const user_services_1 = require("../services/user.services");
function basicAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req);
        const au = (0, basic_auth_1.default)(req);
        console.log(au);
        if (au == undefined) {
            return res.status(401).json({ message: 'Sem basic auth' });
        }
        const user = yield (0, user_services_1.userAuthenticate)({ username: au.name, password: au.pass });
        if (!user) {
            return res
                .status(401)
                .json({ message: 'Invalid Authentication Creadentials' });
        }
        req.user = user;
        next();
    });
}
exports.basicAuth = basicAuth;
