import Usuario from '../models/Usuario';

class UsuarioController {

	
	async store(request, response) {
		
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