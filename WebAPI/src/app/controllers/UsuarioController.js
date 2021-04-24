import Usuario from '../models/Usuario';
import Endereco from '../models/Endereco';

class UsuarioController {

	async store(request, response) {

		const { nome, email, senha, telefone, cpf, tipo } = request.body

		if (!nome || !email || !senha || !telefone || !cpf || !tipo) {
			return response.status(400).send({ message: "Não pode haver campos vazios " })
		}

		const usuarioExiste = await Usuario.findOne({ where: { email: request.body.email } });

		if (usuarioExiste) {
			return response.status(400).json({ erro: 'Usuário já existe!' })
		}

		await Usuario.create(request.body)
			.then(data => {
				data.senha = '********';
				response.send(data);
			}).catch(err => {
				response.status(500).send({ errorMessage: `Erro interno: ( ${err} )` })
			});
	}
	async show(request, response){
		try{
			const usuario = await Usuario.findByPk(request.params.id);
			return response.json(usuario);
		}catch(err){
			return response.status(400).json({ error: err.message});
		}
	}
	async index(request, response) {
		try{
			const usuario = await Usuario.findAll();
			return response.json(usuario);
		}catch(err){
			return response.status(400).json({error: err.message});
		}

	}
	
    async editar(request, response) {
		const id = request.params.id;

		Usuario.update( request.body, {where: { id_usuario: id}})
		.then(usuario => {
			if(usuario == 1){
				response.send({
					message: "Usuário atualizado"
				});
			} else {
				response.send({
					message: "Não foi possível localizar o usuário"
				});
			};
		})
		.catch(err => {
			response.status(500).send({
				message: `Erro interno ao atualiar o usuário de id: ${id}.`
			});
		});
	}
	async destroy(request, response) {
		try{
			const usuario  = await Usuario.findByPk(request.params.id);

			await usuario.destroy(request.body);

			return response.json({ message: `Usuario Excluido` });
		}catch(err){
			return response.status(400).json({error:err.message});
		}

	}
					
}


export default new UsuarioController();