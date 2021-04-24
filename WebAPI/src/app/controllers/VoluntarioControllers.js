import Voluntario from '../models/Voluntario';

class VoluntarioControllers {

	async store(request, response) {
		
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