import Solicitacoes from '../models/Solicitacoes';

class SolicitacoesController {

	
	async store(request, response) {
		
	}

	async update(request, response){

		const id = request.params.id;

		Solicitacoes.update(request.body, {
			where: {id_solicitacoes : id}
		  })
		  .then(data => {
			if (data == 1) {
			  response.send({
				message: "Solicitação atualizada com sucesso"
			  });
			} else {
			  response.send({
				message: `Não foi possível atualizar o solicitação`
			  });
			}
		  })
	}
}

export default new SolicitacoesController();