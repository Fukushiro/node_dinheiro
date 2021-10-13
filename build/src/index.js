"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basic_auth_1 = require("./helpers/basic-auth");
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = require("dotenv");
const jwt_config_1 = require("./helpers/jwt-config");
const user_controller_1 = require("./controllers/user.controller");
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const config_1 = require("../config");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.urlencoded({
    limit: '50mb',
}));
console.log('envs', config_1.envs.DATABASE_URL);
// const c = cors();
app.use((0, cors_1.default)({ origin: '*' }));
// app.options('*', c);
app.use(express_1.default.json({ limit: '50mb' }));
(0, user_routes_1.default)(app);
app.use(basic_auth_1.basicAuth);
app.get('/user/token', user_controller_1.getToken);
app.use(jwt_config_1.verifyJWT);
app.get('/', (req, res) => res.send('Express + Typescript'));
(0, routes_1.default)(app);
// sequelize.sync({});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
