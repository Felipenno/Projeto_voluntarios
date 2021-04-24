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

	
}

export default new VoluntarioControllers();