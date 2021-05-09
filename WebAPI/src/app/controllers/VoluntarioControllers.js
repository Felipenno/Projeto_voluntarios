import Usuario from '../models/Usuario';
import Voluntario from '../models/Voluntario';


class VoluntarioControllers {

	async store(request, response) {

				
		const {id_voluntario, fk_id_usuario, servico, descricao_servico, avaliacao } = await Voluntario.create(request.body);

		if(!servico || !descricao_servico){
			return response.status(400).send({message: "Voluntário não poderá se canditar para serviços sem esses campos preenchidos! "})
		}

        return response.json({
			id_voluntario,
			fk_id_usuario,
            servico,
            descricao_servico,
            avaliacao,
        });


	}

	async update (request, response) {

		const id = request.params.id;

		Voluntario.update(request.body, {
			where: { fk_id_usuario: id}
		  })
		  .then(data => {
			if(data == 1 ){
				response.send({message: "Voluntário Atualizado!"})
			}else {
				response.send({message: "Não foi possivel atualizar voluntário!"})
			}
			
		  }).catch (erro => {
			  response.status(500).send ({message: "Erro interno"})
		  })

		
	}
	async show(request, response){
		try{
			const voluntario = await Voluntario.findByPk(request.params.id);
			return response.json(voluntario);
		}catch(err){
			return response.status(400).json({ error: err.message});
		}
	}
	async index(request, response) {

		try{
			 const voluntario = await Voluntario.findAll();

			 return response.json(voluntario);

		}catch(err){
			return response.status(400).json({error:err.message});
		}
			
		
	}
	async destroy(request, response) {
		try{
			const voluntario  = await Voluntario.findByPk(request.params.id);

			await voluntario.destroy(request.body);

			return response.json({ message: `Voluntario Excluido` });
		}catch(err){
			return response.status(400).json({error:err.message});
		}

	}

	
	

}

export default new VoluntarioControllers();