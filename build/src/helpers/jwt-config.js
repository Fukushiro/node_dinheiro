"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwt = exports.verifyJWT = exports.jwt = void 0;
// const jwt = require('jsonwebtoken');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.jwt = jsonwebtoken_1.default;
function verifyJWT(req, res, next) {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided' });
    }
    if (process.env.SECRET) {
        jsonwebtoken_1.default.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res
                    .status(500)
                    .json({ auth: false, message: 'Failed to authenticate token' });
            }
            req.userId = decoded.id;
            next();
        });
    }
    else {
        return res
            .status(500)
            .json({ auth: false, message: 'Failed to authenticate token' });
    }
}
exports.verifyJWT = verifyJWT;
function getJwt(expire, secret) {
    const token = jsonwebtoken_1.default.sign({ sign: 1 }, secret, { expiresIn: expire });
    return token;
}
exports.getJwt = getJwt;
