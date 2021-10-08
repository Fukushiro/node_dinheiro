import express from 'express';
import UserRoute from './user.routes';
const rotas = (app: any) => {
  UserRoute(app);
};

export default rotas;
