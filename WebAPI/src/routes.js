import { Router } from 'express';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';


const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);

routes.post('/usuarios/:id/solicitacoes', SolicitacoesController.store);


export default routes;