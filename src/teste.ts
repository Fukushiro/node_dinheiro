import { DataTypes } from 'sequelize/types';
import { sequelize } from './models';

const queryInterface = sequelize.getQueryInterface();

async function testeUp() {
  await queryInterface.createTable('carteira', {
    dinheiro: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
    ClienteId: {
      type: DataTypes.INTEGER,
      references: { key: 'id', model: 'Cliente' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  });
}

async function testeDown() {
  await queryInterface.dropTable('carteira');
}
