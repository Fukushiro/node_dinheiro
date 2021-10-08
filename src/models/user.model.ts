import { DataTypes } from 'sequelize';

import { Sequelize } from 'sequelize';
import { sequelize } from '.';
// const queryInterface = sequelize.getQueryInterface();
interface UserInterface {
  username: string;
  password: string;
  teste?: string;
}
const UserModel = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    teste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

export { UserModel };
export type { UserInterface };
