"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const routes = (app) => {
    app.post(`/user/create`, user_controller_1.createUser);
    app.get(`/user/getAll`, user_controller_1.findAllUser);
};
exports.default = routes;
