import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            id_usuario: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            senha: Sequelize.STRING,
            telefone: Sequelize.STRING,
            cpf: Sequelize.STRING,
            tipo: Sequelize.STRING

        },
        {
            sequelize,
            tableName: 'tb_usuario'

        });

    }

    static associate(models){
        this.hasOne(models.Endereco, { foreignKey: 'fk_id_usuario', as: 'endereco' })
        this.hasOne(models.Voluntario, { foreignKey: 'fk_id_usuario', as: 'voluntario' })
        this.belongsToMany(models.Solicitacoes, { foreignKey: 'fk_id_usuario', through: 'tb_usuario_solicitacoes', as: 'solicitacoes' })
    }
}

export default Usuario;