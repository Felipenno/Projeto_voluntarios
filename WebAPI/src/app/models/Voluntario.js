import Sequelize, { Model } from 'sequelize';

class Voluntario extends Model {
    static init(sequelize) {
        super.init({
            id_voluntario: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fk_id_usuario: Sequelize.INTEGER,
            servico: Sequelize.STRING,
            descricao_servico: Sequelize.TEXT,
            avaliacao: Sequelize.INTEGER,
            
        },
        {
            sequelize,
            tableName: 'tb_voluntario'

        });

    }
    static associate(models){
        this.belongsTo(models.Usuario, { foreignKey: 'fk_id_usuario', as: 'usuario' })
    }
}

export default Voluntario;