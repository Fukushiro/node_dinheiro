import express from 'express';
import bcrypt from 'bcrypt';
import {
  createCliente,
  getClientByName,
  getClienteById,
} from '../models/cliente.model';
import { createCarteira } from '../models/carteira.model';

async function criarClienteController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.body == undefined || !req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'Parametros de body obrigatorios não passados' });
  }

  const cliente: any = await createCliente(
    req.body.username,
    req.body.password
  );

  createCarteira({ clienteId: cliente.id, dinheiro: 0, nome: req.body.nome });
  res.status(200).json({ message: 'Sucesso ao criar cliente' });
}

async function getClienteByPk(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!req.params.id) {
    res.status(400).json({ message: 'Id não informado' });
  }
  const id: number = Number(req.params.id);

  const cliente = await getClienteById(id);
  res.status(200).json({ message: 'Sucesso', cliente: cliente });
}

async function authenticateCliente(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Credenciais não informadas' });
  }

  const cliente = await getClientByName(req.body.username);
  if (
    !cliente ||
    !(await bcrypt.compare(req.body.password, cliente.password))
  ) {
    return res
      .status(400)
      .json({ message: 'Credenciais erradas', auth: false });
  }

  return res.status(200).json({
    message: 'Sucesso',
    auth: true,
    cliente: { id: cliente.id, username: cliente.username },
  });
}

export { criarClienteController, getClienteByPk, authenticateCliente };
