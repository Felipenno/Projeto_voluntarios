import Solicitacoes from '../models/Solicitacoes';
import Usuario from '../models/Usuario';

class SolicitacoesController {
	
	async store(request, response) {
		
		const {id} = request.params;

		const { id_voluntario, ...data} = request.body;

		const solicitacoes = await Solicitacoes.create(data);

		const usuarioSolicitacoes = await solicitacoes.addUsuario([id, id_voluntario]);

		return response.send(usuarioSolicitacoes);

	}	
}

export default new SolicitacoesController();