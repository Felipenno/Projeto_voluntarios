'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_voluntario', { 
      id_voluntario: {
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
      servico:{
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      descricao_servico:{
        type: Sequelize.TEXT,
        allowNull: true,
      },
      avaliacao:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_voluntario');
  }
};
