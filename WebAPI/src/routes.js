import { Router } from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import EnderecoController from './app/controllers/EnderecoController';
import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';


const routes = new Router();



routes.post('/session', SessionController.store);
routes.use(authMiddlewares);

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuarios', UsuarioController.update)
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.get('/enderecos', EnderecoController.listar);
routes.put('/enderecos/:id', EnderecoController.editar);
routes.post('/enderecos/:id', EnderecoController.store);
routes.get('/enderecos', EnderecoController.listar);
routes.delete('/enderecos/apagar/:id', EnderecoController.apagar);

routes.post('/voluntario', VoluntarioControllers.store);
routes.put('/voluntario/:id', VoluntarioControllers.update);
routes.get('/voluntario', VoluntarioControllers.index);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);
routes.get('/voluntario/:id', VoluntarioControllers.show);


routes.get('/solicitacoes/:status/usuario/:tipo/:id', SolicitacoesController.listarPorStatus);
routes.get('/solicitacoes/status', SolicitacoesController.listarPorStatus);
routes.post('/solicitacoes/:id', SolicitacoesController.store);
routes.get('/solicitacoes', SolicitacoesController.index);
routes.get('/solicitacoes/:id', SolicitacoesController.show);
routes.delete('/solicitacoes/:id', SolicitacoesController.destroy);
routes.put('solicitacoes/:id', SolicitacoesController.index);
routes.put('/solicitacoes/:id', SolicitacoesController.update);
routes.post('/usuarios/:id/solicitacoes', SolicitacoesController.store);


routes.get('/usuario/endereco/solicitacoes/:id', UsuarioController.listarPorLocalizacao);


export default routes;