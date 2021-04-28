import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
            senhaV: Sequelize.VIRTUAL,
            telefone: Sequelize.STRING,
            cpf: Sequelize.STRING,
            tipo: Sequelize.STRING

        },
        {
            sequelize,
            tableName: 'tb_usuario'

        });

        this.addHook('beforeSave', async (usuario) => {
            if (usuario.senhaV) {
                usuario.senha = await bcrypt.hash(usuario.senhaV, 8);
            }
        });

        return this;
    }

    checkPassword(senhaV) {
        return bcrypt.compare(senhaV, this.senha);
    }

    static associate(models){
        this.hasOne(models.Endereco, { foreignKey: 'fk_id_usuario', as: 'endereco' })
        this.belongsToMany(models.Solicitacoes, { foreignKey: 'fk_id_usuario', through: 'tb_usuario_solicitacoes', as: 'solicitacoes' })
    }
}

export default Usuario;