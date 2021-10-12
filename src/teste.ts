import { DataTypes } from 'sequelize/types';
import { sequelize } from './models';

const queryInterface = sequelize.getQueryInterface();

async function testeUp() {
  await queryInterface.createTable('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}

async function testeDown() {
  await queryInterface.dropTable('carteira');
}
