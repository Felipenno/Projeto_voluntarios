import Usuario from '../models/Usuario';

class UsuarioController {

	
	async store(request, response) {
		const { id_usuario, nome, email } = await Usuario.create(request.body);

		return response.json({
			id_usuario,
			nome,
			email
		});
	}

	async update(request, response) {
		const id = request.params.id;

		await Usuario.update(request.body, { where: { id_usuario: id}})
		.then(usuario => {
			if (usuario == 1) {
				response.send({ message: "Usuário atualizado!"});
			} else {
				response.send({ messsage: "Não foi possível atualizar o usuário!"});
			}
		});
	}
}

export default new UsuarioController();