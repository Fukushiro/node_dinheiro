"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const lodash_1 = __importDefault(require("lodash"));
const result = dotenv_1.default.config();
let envs;
exports.envs = envs;
if (!('error' in result)) {
    exports.envs = envs = result.parsed;
}
else {
    exports.envs = envs = {};
    lodash_1.default.each(process.env, (value, key) => (envs[key] = value));
}
