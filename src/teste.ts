import { DataTypes } from 'sequelize/types';
import { sequelize } from './models';

const queryInterface = sequelize.getQueryInterface();

async function testeUp() {
  await queryInterface.createTable('Cliente', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
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
  await queryInterface.dropTable('Cliente');
}
