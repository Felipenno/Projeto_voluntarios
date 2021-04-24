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
	async apagar(request, response) {

		const id = request.params.id;

		Endereco.destroy({where : {id_endereco : id }})
		.then(num => {
			if(num ==1){
				response.send({
					message: "Endereço apagado com sucesso"
				});
			} else {
				response.send({
					message: "Não foi possível apagar o endereço"
				});
			}
		})
		.catch(err => {
			response.status(500).send({
				message: "Erro interno ao apagar o endereco"
			})
		})

	}

	
}

export default new EnderecoController();