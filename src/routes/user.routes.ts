import express from 'express';
import {
  createUser,
  findAllUser,
  getToken,
} from '../controllers/user.controller';
import { verifyJWT } from '../helpers/jwt-config';

const routes = (app: any) => {
  app.post(`/user/create`, createUser);
  app.get(`/user/getAll`, findAllUser);
};

export default routes;
