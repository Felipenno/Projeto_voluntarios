import Sequelize, { Model } from 'sequelize';

class Solicitacoes extends Model {
    static init(sequelize) {
        super.init({
            id_solicitacoes: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            servico: Sequelize.STRING,
            descricao_problema: Sequelize.TEXT,
            dia: Sequelize.DATE,
            status: Sequelize.STRING,
            data_criacao: Sequelize.DATE,
            data_encerramento: Sequelize.DATE,
            nota: Sequelize.INTEGER

        },
        {
            sequelize,
            tableName: 'tb_solicitacoes'

        });

    }
    static associate(models){
        this.belongsToMany(models.Usuario, { foreignKey: 'fk_id_solicitacoes', through: 'tb_usuario_solicitacoes', as: 'usuarios' })
          
    }
}

export default Solicitacoes;