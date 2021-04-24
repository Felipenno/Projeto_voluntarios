import Endereco from '../models/Endereco';

class EnderecoController {

	
	async store(request, response) {
		
	}
	async listar(request, response) {
		try{
		const endereco = await Endereco.findAll();
		return response.json(endereco);
	}catch(err){
		return response.status(400).json({ error: err.message});
		}
	}

	async editar(request, response) {
		const id = request.params.id;

		Endereco.update( request.body, {where: { id_endereco: id}})
		.then(endereco => {
			if(endereco == 1){
				response.send({
					message: "O Endereço foi atualizado"
				});
			} else {
				response.send({
					message: "Não foi possível atualizar o endereço"
				});
			};
		})
		.catch(erro => {
			response.status(500).send({
				message: "Não foi possível atualizar o endereço"
			});
		});
	}

	
}

export default new EnderecoController();