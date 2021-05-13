import Solicitacoes from '../models/Solicitacoes';
import Usuario from '../models/Usuario';

class SolicitacoesController {

	async store(request, response) {

		try {
			const solicitacoes = await Solicitacoes.create(request.body);
			const usuarioSolicitacoes = await solicitacoes.addUsuario(request.id_usuario);
			return response.send({
				solicitacoes,
				usuarioSolicitacoes
			});
		} catch (error) {
			response.send({
				message: 'Erro ao criar solicitação!'
			});
		}
	}

	async listarPorStatus(request, response) {
		const {
			status,
			tipo
		} = request.params

		await Usuario.findAll({
			attributes: [],
			where: {
				id_usuario: request.id_usuario, //'concluido, criado, andamento'
			},
			include: {
				association: 'solicitacoes',
				through: {
					attributes: []
				},
				where: {
					status
				},
				include: {
					attributes: ['nome', 'telefone', 'email'],
					association: 'usuarios',
					through: {
						attributes: []
					},
					where: {
						tipo
					},
					include: {
						association: 'endereco',
						attributes: ['estado', 'cidade']
					}
				},
			}
		}).then(user => {
			return response.send(user)
		}).catch(erro => {
			return response.status(500).send({
				message: `Erro interno: ( ${erro} )`
			})
		})
	}

	async show(request, response) {
		try {
			const solicitacoes = await Solicitacoes.findByPk(request.params.id);
			return response.json(solicitacoes);
		} catch (err) {
			return response.status(400).json({
				error: err.message
			});
		}
	}

	async index(request, response) {
		try {
			const solicitacoes = await Solicitacoes.findAll({
				include: {
					association: "usuarios",
					where: request.id_usuario,
					attributes: []
				}
			});

			return response.json(solicitacoes);

		} catch (err) {
			return response.status(400).json({
				error: err.message
			});
		}

	}

	async destroy(request, response) {
		try {
			const solicitacoes = await Solicitacoes.findByPk(request.params.id);

			await solicitacoes.destroy(request.body);

			return response.json({
				message: `Solicitação Excluida`
			});
		} catch (err) {
			return response.status(400).json({
				error: err.message
			});
		}

	}

	async update(request, response) {

		const id = request.params.id;

		Solicitacoes.update(request.body, {
				where: {
					id_solicitacoes: id
				}
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

	async adicionarVoluntario(request, response) {

		const {
			id_solicitacoes
		} = request.params;

		const solicitacoes = await Solicitacoes.findByPk(id_solicitacoes)

		if (!solicitacoes) {
			return response.status(400).send({
				erro: 'Solicitação não encontrada'
			})
		}

		await solicitacoes.addUsuario(request.id_usuario);
		await Solicitacoes.update(request.body, {
				where: {
					id_solicitacoes
				}
			})
			.then(alteracoes => {
				if (alteracoes == 1) {
					response.send({
						message: "Solicitação Atualizada!! "
					})
				} else(
					response.send({
						message: "Nada alterado"
					})
				)

			}).catch(erro => {
				return response.status(500).send({
					message: `Erro interno: ( ${erro} )`
				})
			})

	}

	async concluirSolicitação(request, response) {

		const {
			id_solicitacoes
		} = request.params;


		await Solicitacoes.update(request.body, {
				where: {
					id_solicitacoes
				}
			})
			.then(alterarStatus => {
				if (alterarStatus == 1) {
					response.send({
						message: "Solicitação Concluída!! "
					})
				} else(
					response.send({
						message: "Nada alterado"
					})
				)

			}).catch(erro => {
				return response.status(500).send({
					message: `Erro interno: ( ${erro} )`
				})
			})
	}

	async cancelarSolicitacao(request, response) {
		const {
			id_solicitacoes
		} = request.params;

		const solicitacoes = await Solicitacoes.findByPk(id_solicitacoes)

		if (!solicitacoes) {
			return response.status(400).send({
				erro: 'Solicitação não encontrada'
			})
		}

		await solicitacoes.removeUsuario(request.id_usuario);
		await Solicitacoes.update(request.body, {
				where: {
					id_solicitacoes
				}
			})
			.then(alteracoes => {
				if (alteracoes == 1) {
					response.send({
						message: "Solicitação Atualizada!! "
					})
				} else(
					response.send({
						message: "Nada alterado"
					})
				)

			}).catch(erro => {
				return response.status(500).send({
					message: `Erro interno: ( ${erro} )`
				})
			})

	}

}

export default new SolicitacoesController();