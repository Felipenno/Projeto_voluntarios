import Usuario from '../models/Usuario';
import Endereco from '../models/Endereco';

class UsuarioController {

	
	async store(request, response) {
		
	}
	async index(request, response){

    const usuarios = await Usuario.findAll({
      include: { association: 'endereco' }
    });

    return response.json(usuarios);

	}

	
}

export default new UsuarioController();