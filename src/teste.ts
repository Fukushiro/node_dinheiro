import { DataTypes } from 'sequelize/types';
import { sequelize } from './models';

const queryInterface = sequelize.getQueryInterface();

async function testeUp() {
  await queryInterface.bulkInsert('User', [
    {
      username: 'usuario',
      password: 'senha',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

async function testeDown() {
  await queryInterface.bulkDelete('User', null, {});
}
