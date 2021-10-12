import express from 'express';
import {
  addValueCarteira,
  createCarteira,
  getCarteiraByCliente,
  removeValueCarteira,
} from '../models/carteira.model';

function criarCarteiraController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.body == undefined || !req.body.dinheiro || !req.body.clienteId) {
    return res
      .status(400)
      .json({ message: 'Parametros de body obrigatorios não passados' });
  }

  createCarteira(req.body.dinheiro, req.body.clienteId);

  res.status(200).json({ message: 'Sucesso ao criar cliente' });
}

async function getCarteiraByClienteController(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.params == undefined || !req.params.clienteId) {
    return res
      .status(400)
      .json({ message: 'Parametros de body obrigatorios não passados' });
  }
  const carteira = await getCarteiraByCliente(Number(req.params.clienteId));

  res.status(200).json({ message: 'Sucesso', carteira: carteira });
}

async function addCarteiraValue(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.body == undefined || !req.body.amount || !req.body.carteiraId) {
    return res
      .status(400)
      .json({ message: 'Parametros de body obrigatorios não passados' });
  }

  await addValueCarteira(req.body.carteiraId, req.body.amount);
  res.status(200).json({ message: 'Sucesso' });
}

async function removeCarteiraValue(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.body == undefined || !req.body.amount || !req.body.carteiraId) {
    return res
      .status(400)
      .json({ message: 'Parametros de body obrigatorios não passados' });
  }

  await removeValueCarteira(req.body.carteiraId, req.body.amount);
  res.status(200).json({ message: 'Sucesso' });
}

export {
  criarCarteiraController,
  getCarteiraByClienteController,
  addCarteiraValue,
  removeCarteiraValue,
};
