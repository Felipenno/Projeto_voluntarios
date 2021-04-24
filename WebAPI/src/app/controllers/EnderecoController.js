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

	
}

export default new EnderecoController();