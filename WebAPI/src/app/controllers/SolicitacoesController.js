import Solicitacoes from '../models/Solicitacoes';

class SolicitacoesController {

	
	async store(request, response) {
		
	}

	async listarPorStatus(request, response){
		const { status, id } = request.params

		await Solicitacoes.findAll({
			where:{
				status
			},
			include: {
				association: "usuarios",
				attributes: ["nome", "telefone" ],
				through: {
					where: {fk_id_usuario: id}
				}
			}
		}).then(solicitacoes => {
			return response.send(solicitacoes)
		}).catch(erro => {
			return response.status(500).send({message: `Erro interno: ( ${erro} )`})
		})
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

	
}

export default new SolicitacoesController();