import Solicitacoes from '../models/Solicitacoes';
import Usuario from '../models/Usuario';

class SolicitacoesController {
	
	async store(request, response) {
		
		const id_usuario = request.params.id;

		const { id_solicitacoes, servico, dia, status, descrica_problema, data_criacao, data_encerramento, nota} = request.body

		await Solicitacoes.create({
			servico: servico,
			dia: dia,
			status: status,
			descrica_problema: descrica_problema,
			data_criacao: data_criacao,
			data_encerramento: data_encerramento,
			nota: nota,
			uSolicitacoes: [
				{fk_id_usuario: id_usuario},
				{fk_id_solicitacoes: id_solicitacoes}
			]
		}, {
			include: [ 'usuarios' ]
		})
		.then(data => {
			return response.send(data)
		}).catch( err => {
			return response.status(500).send({ message: `Erro interno: ${err}.`});
		});
	}	
}

export default new SolicitacoesController();