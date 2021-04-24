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
			where: { fk_id_usuario : id}
		  })
		  .then(voluntario => {
			if (voluntario == 1) {
			  response.send({
				message: "Serviço atualizado"
			  });
			} else{
				response.send({
					message: "Não foi possível atualizar serviço"
				});
			}
		  })

         return response.json({
			servico,
            descricao_servico,
         });
		
	}

	
}

export default new VoluntarioControllers();