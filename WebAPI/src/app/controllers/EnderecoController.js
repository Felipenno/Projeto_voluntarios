import Endereco from '../models/Endereco';
import Usuario from '../models/Usuario';

class EnderecoController {

	async store(request, response) {

		const { id } = request.params
		const usuario = await Usuario.findByPk( id ) 

		if(!usuario){
			return request.status(400).send({ erro: "Usuário não existe"})
		}

		const endereco = request.body;
		endereco.fk_id_usuario = id;
		
		await Endereco.create(endereco)
		.then(data => {
			return response.send(data);
		}).catch(erro => {
			return response.status(500).send({message: `Erro interno: ( ${erro} )`});
		});

	}

	async listar(request, response) {
		try{
		const endereco = await Endereco.findAll();
		return response.json(endereco);
	}catch(err){
		return response.status(400).json({ error: err.message});
		}
	}

	async listarUm(request, response) {
		try{
		const endereco = await Endereco.findOne({where: {fk_id_usuario:request.id_usuario}});
		return response.json(endereco);
	}catch(err){
		return response.status(400).json({ error: err.message});
		}
	}

	async editar(request, response) {
		Endereco.update(request.body, {where:{fk_id_usuario:request.id_usuario}})
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