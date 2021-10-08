import { sequelize, Sequelize } from '../models';
import express from 'express';
import { UserInterface, UserModel } from '../models/user.model';
import { getJwt } from '../helpers/jwt-config';

async function createUser(req: any, res: any) {
  if (req.body == undefined) {
    res.status(400).json({ message: 'erro' });
    return;
  }

  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: 'erro' });
    return;
  }

  const user: UserInterface = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const userCreated = await UserModel.create(user);
    res.status(200).json({ message: 'Sucesso' });
  } catch (e) {
    console.log(e);

    res.status(500).json({ message: 'ERRO' });
  }
}

async function findAllUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const users = (await UserModel.findAll()).map((v: any) => {
      return { username: v.username };
    });

    res.status(200).json({ message: 'Sucesso', users: users });
  } catch (e) {
    res.status(500).json({ message: 'erro' });
  }
}

function findOneUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {}

function getToken(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const token = getJwt(100 * 60, process.env.SECRET);
  res.status(200).json({ token: token });
}

export { createUser, findAllUser, getToken };
