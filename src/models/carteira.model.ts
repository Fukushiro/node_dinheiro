import { DataTypes } from 'sequelize';
import { sequelize } from '.';
import { ClienteModel } from './cliente.model';

const CarteiraModel = sequelize.define(
  'carteira',
  {
    dinheiro: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
  },
  { freezeTableName: true }
);

CarteiraModel.belongsTo(ClienteModel, { foreignKey: 'ClienteId' });

async function createCarteira(dinheiro: number, clienteId: number) {
  await CarteiraModel.create({ dinheiro: dinheiro, ClienteId: clienteId });
}

async function getCarteiraByCliente(clienteId: number) {
  const carteira = await CarteiraModel.findAll({
    where: { ClienteId: clienteId },
  });

  return carteira;
}

async function addValueCarteira(carteiraId: number, amount: number) {
  const carteira: any = await CarteiraModel.findOne({
    where: { id: carteiraId },
  });
  if (carteira != null) {
    await CarteiraModel.update(
      { dinheiro: carteira.dinheiro + amount },
      { where: { id: carteiraId } }
    );
  }
}

export { createCarteira, getCarteiraByCliente, addValueCarteira };
