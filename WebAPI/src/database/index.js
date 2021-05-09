import { Sequelize }  from 'sequelize';
import databaseConfig from '../config/DbConfig';

import Usuario from '../app/models/Usuario';
import Endereco from '../app/models/Endereco';
import Solicitacoes from '../app/models/Solicitacoes';


const models = [ Usuario ,Endereco, Solicitacoes ];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize (databaseConfig);
		
		models.map( model => model.init(this.connection));
		models.map( model => model.associate(this.connection.models));
	}
}

export default new Database();