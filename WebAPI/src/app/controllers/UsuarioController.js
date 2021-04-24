import Usuario from '../models/Usuario';

class UsuarioController {

	async store(request, response) {
		
		const {nome, email, senha, telefone, cpf, tipo } = request.body

		if(!nome || !email || !senha || !telefone || !cpf || !tipo){
			return response.status(400).send({message: "Não pode haver campos vazios "})
		}

		const usuarioExiste = await Usuario.findOne({ where: { email: request.body.email}});

        if (usuarioExiste) {
            return response.status(400).json({ erro: 'Usuário já existe!'})
        }

		await Usuario.create(request.body)
		.then(data => {
			data.senha = '********';
			response.send(data);
		}).catch(err => {
			response.status(500).send({errorMessage: `Erro interno: ( ${err} )`})
		});
	}

	
}

export default new UsuarioController();