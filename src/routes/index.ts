import express from 'express';
import { ClienteRoutes } from './cliente.routes';
import UserRoute from './user.routes';
const rotas = (app: any) => {
  UserRoute(app);
  ClienteRoutes(app);
};

export default rotas;
