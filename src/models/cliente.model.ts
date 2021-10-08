import { BuildOptions, Model } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '.';
import { UserModel } from './user.model';
import { encript } from '../helpers/bcriptManager';
interface ICliente {
  username: string;
  password: string;
}
interface IClienteNoPass {
  username: string;
}

const ClienteModel = sequelize.define(
  'Cliente',
  {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { freezeTableName: true }
);

async function createCliente(username: string, password: string) {
  const name = username;
  const pass = await encript(password);

  await ClienteModel.create({ username: name, password: pass });
}

async function getClienteById(id: number) {
  const cliente = await ClienteModel.findByPk(id, {
    attributes: ['username'],
  });

  return cliente;
}

async function getClientByName(username: string) {
  const name = username;

  const cliente: any = await ClienteModel.findOne({
    where: { username: name },
    attributes: ['id', 'username', 'password'],
  });

  return cliente;
}

export {
  ClienteModel,
  ICliente,
  createCliente,
  getClienteById,
  getClientByName,
};
