'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_usuario', { 
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      senha:{
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      telefone:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      tipo:{
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_usuario');
  }
};
