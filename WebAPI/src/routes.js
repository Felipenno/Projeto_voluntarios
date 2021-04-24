import { Router } from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import SolicitacoesController from './app/controllers/SolicitacoesController';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.editar);
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.post('/endereco/:id', EnderecoController.store);
routes.get('/enderecos', EnderecoController.listar);
routes.put('/enderecos/:id', EnderecoController.editar);
routes.put('/enderecos/apagar/:id', EnderecoController.apagar);

routes.post('/voluntario', VoluntarioControllers.store);
routes.put('/voluntario/:id', VoluntarioControllers.update);
routes.get('/voluntario', VoluntarioControllers.index);
routes.get('/voluntario/:id', VoluntarioControllers.show);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);

routes.get('/solicitacoes', SolicitacoesController.index);
routes.get('/solicitacoes/:id', SolicitacoesController.show);
routes.delete('/solicitacoes/:id', SolicitacoesController.destroy);

export default routes;