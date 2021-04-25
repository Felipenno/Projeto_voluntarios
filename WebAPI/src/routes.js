import { Router } from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import SolicitacoesController from './app/controllers/SolicitacoesController';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.editar);
routes.delete('/usuario/:id', UsuarioController.destroy);

<<<<<<< HEAD
routes.get('/enderecos', EnderecoController.listar);
routes.put('/enderecos/:id', EnderecoController.editar);
=======
routes.post('/enderecos/:id', EnderecoController.store);
routes.get('/enderecos', EnderecoController.listar);
routes.put('/enderecos/:id', EnderecoController.editar);
routes.delete('/enderecos/apagar/:id', EnderecoController.apagar);
>>>>>>> 3f50fa4ea4ce6c4c2c3a9a9cd47fd07b44d2e979

routes.post('/voluntario', VoluntarioControllers.store);
routes.put('/voluntario/:id', VoluntarioControllers.update);
routes.get('/voluntario', VoluntarioControllers.index);
<<<<<<< HEAD
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);

routes.put('/solicitacoes/:id', SolicitacoesController.update);

routes.put('solicitacoes/:id', SolicitacoesController.index)
=======
routes.get('/voluntario/:id', VoluntarioControllers.show);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);

routes.get('/solicitacoes', SolicitacoesController.index);
routes.get('/solicitacoes/:id', SolicitacoesController.show);
routes.delete('/solicitacoes/:id', SolicitacoesController.destroy);
>>>>>>> 3f50fa4ea4ce6c4c2c3a9a9cd47fd07b44d2e979

export default routes;