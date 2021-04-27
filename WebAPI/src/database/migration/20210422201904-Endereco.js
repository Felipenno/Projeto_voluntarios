'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_endereco', { 
      id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fk_id_usuario : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_usuario', key: 'id_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cep:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      bairro:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      rua:{
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complemento:{
        type: Sequelize.STRING(50),
        allowNull: true,
      },

      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_endereco');
  }
};
