"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const cliente_controller_1 = require("../controllers/cliente.controller");
function ClienteRoutes(app) {
    app.post('/cliente/create', cliente_controller_1.criarClienteController);
    app.get('/cliente/:id', cliente_controller_1.getClienteByPk);
    app.post('/cliente/auth', cliente_controller_1.authenticateCliente);
}
exports.ClienteRoutes = ClienteRoutes;
