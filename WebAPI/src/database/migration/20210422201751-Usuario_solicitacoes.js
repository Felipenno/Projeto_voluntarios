'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_usuario_solicitacoes', { 
      id_usuario_solicitacoes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fk_id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_usuario', key: 'id_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_id_solicitacoes : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_solicitacoes', key: 'id_solicitacoes'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_usuario_solicitacoes');
  }
};
