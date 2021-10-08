import express from 'express';
import {
  authenticateCliente,
  criarClienteController,
  getClienteByPk,
} from '../controllers/cliente.controller';

function ClienteRoutes(app: express.Application) {
  app.post('/cliente/create', criarClienteController);
  app.get('/cliente/:id', getClienteByPk);
  app.post('/cliente/auth', authenticateCliente);
}
export { ClienteRoutes };
