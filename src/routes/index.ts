import express from 'express';
import { CarteiraRoutes } from './carteira.routes';
import { ClienteRoutes } from './cliente.routes';
import UserRoute from './user.routes';
const rotas = (app: any) => {
  // UserRoute(app);
  ClienteRoutes(app);
  CarteiraRoutes(app);
};

export default rotas;
