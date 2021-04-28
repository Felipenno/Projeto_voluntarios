import { Router } from 'express';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import EnderecoController from './app/controllers/EnderecoController';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);

routes.post('/voluntario', VoluntarioControllers.store);

routes.put('/voluntario/:id', VoluntarioControllers.update);


routes.get('/usuario/endereco/solicitacoes/:id', UsuarioController.listarPorLocalizacao);



export default routes;