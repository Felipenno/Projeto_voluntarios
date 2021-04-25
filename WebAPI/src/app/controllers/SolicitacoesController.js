import Solicitacoes from '../models/Solicitacoes';

class SolicitacoesController {

	
	async store(request, response) {
		
	}
	async show(request, response){
		try{
			const solicitacoes = await Solicitacoes.findByPk(request.params.id);
			return response.json(solicitacoes);
		}catch(err){
			return response.status(400).json({ error: err.message});
		}
	}
	async index(request, response) {
		try{
			 const solicitacoes = await Solicitacoes.findAll();

			 return response.json(solicitacoes);

		}catch(err){
			return response.status(400).json({error:err.message});
		}
					
	}
	async destroy(request, response) {
		try{
			const solicitacoes  = await Solicitacoes.findByPk(request.params.id);

			await solicitacoes.destroy(request.body);

			return response.json({ message: `Solicitação Excluida` });
		}catch(err){
			return response.status(400).json({error:err.message});
		}

	}

	async update(request, response){

		const id = request.params.id;

		Solicitacoes.update(request.body, {
			where: {id_solicitacoes : id}
		  })
		  .then(data => {
			if (data == 1) {
			  response.send({
				message: "Solicitação atualizada"
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