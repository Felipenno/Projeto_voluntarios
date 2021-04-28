import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';
import authConfig from '../../config/auth';

class SessionController {

    async store(req, res) {
        const { email, senhaV } = req.body;

        const usuario = await Usuario.findOne({ where: { email }});

        if (!usuario) {
            return res.status(401).json({ erro: 'Usuário não encontrado!' });
        }

        if (!(await usuario.checkPassword(senhaV))) {
            return res.status(401).json({ erro: 'Senha não confere!' });
        }

        const { id_usuario, nome } = usuario;

        return res.json({
            usuario: {
                id_usuario,
                nome,
                email,
            },
            token: jwt.sign({ id_usuario }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }    
}

export default new SessionController();