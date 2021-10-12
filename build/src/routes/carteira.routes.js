"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarteiraRoutes = void 0;
const carteira_controller_1 = require("../controllers/carteira.controller");
function CarteiraRoutes(app) {
    app.post('/carteira/criar', carteira_controller_1.criarCarteiraController);
    app.get('/carteira/cliente/get/:clienteId', carteira_controller_1.getCarteiraByClienteController);
    app.post('/carteira/add', carteira_controller_1.addCarteiraValue);
    app.post('/carteira/remove', carteira_controller_1.removeCarteiraValue);
}
exports.CarteiraRoutes = CarteiraRoutes;
