import { Router } from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import SessionController from './app/controllers/SessionController';


const routes = new Router();

routes.post('/session', SessionController.store);

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.editar);
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


routes.get('/solicitacoes/:status/usuario/:id', SolicitacoesController.listarPorStatus);
routes.get('/solicitacoes', SolicitacoesController.index);
routes.get('/solicitacoes/:id', SolicitacoesController.show);
routes.delete('/solicitacoes/:id', SolicitacoesController.destroy);
routes.put('solicitacoes/:id', SolicitacoesController.index);
routes.put('/solicitacoes/:id', SolicitacoesController.update);
routes.post('/usuarios/:id/solicitacoes', SolicitacoesController.store);


export default routes;