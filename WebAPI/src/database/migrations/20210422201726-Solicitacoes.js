'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_solicitacoes', { 
      id_solicitacoes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      servico:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      descricao_problema:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dia:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      data_criacao:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_encerramento:{
        type: Sequelize.DATE,
        allowNull: true,
      },
      nota:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_solicitacoes');
  }
};
