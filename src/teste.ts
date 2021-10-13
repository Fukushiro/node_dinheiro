import { DataTypes } from 'sequelize/types';
import { sequelize } from './models';

const queryInterface = sequelize.getQueryInterface();

async function testeUp() {
  await queryInterface.addColumn('carteira', 'nome', {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'default',
  });
}

async function testeDown() {
  await queryInterface.removeColumn('carteira', 'nome');
}
