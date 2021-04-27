import Solicitacoes from '../models/Solicitacoes';


class SolicitacoesController {
	
	async store(request, response) {
		
		const {id} = request.params;

		try {
			const solicitacoes = await Solicitacoes.create(request.body);
			const usuarioSolicitacoes = await solicitacoes.addUsuario(id);
			return response.send({solicitacoes, usuarioSolicitacoes});
		} catch (error) {
			response.send({ message: 'Erro ao criar solicitação!'});
		}
	}
}

export default new SolicitacoesController();