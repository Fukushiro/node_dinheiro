import express from 'express';
import {
  addCarteiraValue,
  criarCarteiraController,
  getCarteiraByClienteController,
} from '../controllers/carteira.controller';

function CarteiraRoutes(app: express.Application) {
  app.post('/carteira/criar', criarCarteiraController);
  app.get('/carteira/cliente/get/:clienteId', getCarteiraByClienteController);
  app.post('/carteira/add', addCarteiraValue);
}
export { CarteiraRoutes };
