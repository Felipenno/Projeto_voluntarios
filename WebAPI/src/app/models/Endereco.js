import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
    static init(sequelize) {
        super.init({
           id_endereco: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fk_id_usuario: Sequelize.INTEGER,
            cep: Sequelize.STRING,
            estado: Sequelize.STRING,
            cidade: Sequelize.STRING,
            bairro: Sequelize.STRING,
            rua: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            complemento: Sequelize.STRING
        },
        {
            sequelize,
            tableName: 'tb_endereco'

        });

    }
    static associate(models){
        this.belongsTo(models.Usuario, { foreignKey: 'fk_id_usuario', as: 'usuario' })
    }
}

export default Endereco;