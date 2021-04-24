import Endereco from '../models/Endereco';
import Usuario from '../models/Usuario';

class EnderecoController {

	async store(request, response) {
		 
		const { id } = request.params;

		const usuario = await Usuario.findByPk( id )

		if(!usuario){
			return request.status(400).send({ erro: "Usuário não existe"})
		}

		const enderecoBody = request.body;
		enderecoBody.fk_id_usuario = id;
		
		await Endereco.create(enderecoBody)
		.then(data => {
			return response.send(data);
		}).catch(erro => {
			return response.status(500).send({message: `Erro interno: ( ${erro} )`});
		});

		response.send(endereco);
	}

	
}

export default new EnderecoController();