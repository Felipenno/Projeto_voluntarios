import Solicitacoes from '../models/Solicitacoes';
import Usuario from '../models/Usuario';

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

	async listarPorStatus(request, response){
		const { status, tipo, id } = request.params

		await Usuario.findAll({
			attributes: ['id_usuario'],
			where:{
				id_usuario: id, //'concluido, criado, andamento'
			},
			include: {
				association: 'solicitacoes',
				where:{
					status
				},
				include:{
					association: 'usuarios',
					where:{
						tipo
					}
				},
			}
		}).then(user => {
			return response.send(user)
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