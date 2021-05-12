import Usuario from '../models/Usuario';
import Solicitacoes from '../models/Solicitacoes';

class UsuarioController {

	async store(request, response) {

		const { nome, email, senhaV, telefone, cpf, tipo } = request.body

		if (!nome || !email || !senhaV || !telefone || !cpf || !tipo) {
			return response.status(400).send({ message: "Não pode haver campos vazios " })
		}

		const usuarioExiste = await Usuario.findOne({ where: { email: request.body.email } });

		if (usuarioExiste) {
			return response.status(400).json({ erro: 'Usuário já existe!' })
		}

		await Usuario.create(request.body)
			.then(data => {
				data.senha = '********';
				response.send(data);
			}).catch(err => {
				response.status(500).send({ errorMessage: `Erro interno: ( ${err} )` })
			});
	}
	async show(request, response){
		try{
			const usuario = await Usuario.findByPk(request.id_usuario);
			return response.json(usuario);
		}catch(err){
			return response.status(400).json({ error: err.message});
		}
	}
	async index(request, response) {
		try{
			const usuario = await Usuario.findAll();
			return response.json(usuario);
		}catch(err){
			return response.status(400).json({error: err.message});
		};
	}

	async listarPorLocalizacao(request, response){
		
		 
		const {endereco} = await Usuario.findByPk(request.id_usuario,{
			include: { 
			association:'endereco',
			}
		
		});
		//concluido, criado, andamento'
		await Solicitacoes.findAll({ 
			where: {status: "criado"},
			include: {
				association: "usuarios",
				where:{tipo: 's'},
				attributes: ["nome"],
				include: {
					association: "endereco",
					where: {estado: endereco.estado},
					attributes: ["estado", "cidade"],
				}
			}
		}).then(usuario => {
			return response.send(usuario)
		}).catch(erro => {
			return response.status(500).send({message: `Erro interno: ( ${erro} )`})
		});
	} 
	
    async update(request, response) {
		const { email, senhaV } = request.body;

		const usuario = await Usuario.findByPk(request.id_usuario);

		if (email && email !== usuario.email) {
			const usuarioExiste = await Usuario.findOne({ where: { email }});

			if (usuarioExiste) {
				return response.status(400).json({ erro: 'Usuário já existe! '});
			}
		}

		if (senhaV && !(await usuario.checkPassword(senhaV))) {
			return response.status(401).json({ erro: 'Senha incorreta.' });
		}

		const { id, nome, provider } = await usuario.update(request.body);

		return response.json({ 
			id,
			nome,
			email,
			provider
		});
	}

	async destroy(request, response) {
		try{
			const usuario  = await Usuario.findByPk(request.params.id);

			await usuario.destroy(request.body);

			return response.json({ message: `Usuario Excluido` });
		}catch(err){
			return response.status(400).json({error:err.message});
		}

	}
					
}


export default new UsuarioController();