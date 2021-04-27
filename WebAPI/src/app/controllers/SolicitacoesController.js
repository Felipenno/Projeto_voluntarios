import Solicitacoes from '../models/Solicitacoes';

class SolicitacoesController {
	
	async store(request, response) {		
		try {
			const solicitacoes = await Solicitacoes.create(request.body);
			const usuarioSolicitacoes = await solicitacoes.addUsuario(id);
			return response.send({solicitacoes, usuarioSolicitacoes});
		} catch (error) {
			response.send({ message: 'Erro ao criar solicitação!'});
		}
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