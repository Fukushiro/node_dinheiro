'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn('carteira', 'nome', {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default',
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeColumn('carteira', 'nome');
  },
};
