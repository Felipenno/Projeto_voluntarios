import Usuario from '../models/Usuario';
import Endereco from '../models/Endereco';
import Solicitacoes from '../models/Solicitacoes';




class UsuarioController {

	async store(request, response) {
		
		const {nome, email, senha, telefone, cpf, tipo } = request.body

		if(!nome || !email || !senha || !telefone || !cpf || !tipo){
			return response.status(400).send({message: "Não pode haver campos vazios "})
		}

		const usuarioExiste = await Usuario.findOne({ where: { email: request.body.email}});

        if (usuarioExiste) {
            return response.status(400).json({ erro: 'Usuário já existe!'})
        }

		await Usuario.create(request.body)
		.then(data => {
			data.senha = '********';
			response.send(data);
		}).catch(err => {
			response.status(500).send({errorMessage: `Erro interno: ( ${err} )`})
		});
	}

	async listarPorLocalizacao(request, response){
		
		const {id}= request.params;
		 
		const {endereco} = await Usuario.findByPk(id,{
			
			include: { 
			association:'endereco',
		
		}
		})
		
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
		})
	} 
	
}

export default new UsuarioController();