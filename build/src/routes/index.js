"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carteira_routes_1 = require("./carteira.routes");
const cliente_routes_1 = require("./cliente.routes");
const rotas = (app) => {
    // UserRoute(app);
    (0, cliente_routes_1.ClienteRoutes)(app);
    (0, carteira_routes_1.CarteiraRoutes)(app);
};
exports.default = rotas;
