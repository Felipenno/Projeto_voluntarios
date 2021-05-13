import {
    Router
} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import SolicitacoesController from './app/controllers/SolicitacoesController';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';
import EnderecoController from './app/controllers/EnderecoController';
import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);
routes.post('/session', SessionController.store);
routes.post('/endereco/:id', EnderecoController.store);
routes.use(authMiddlewares);

routes.get('/usuario', UsuarioController.index);
routes.get('/usuarios/selecionar', UsuarioController.show);
routes.put('/usuarios', UsuarioController.update)
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.get('/enderecos', EnderecoController.listar);
routes.put('/enderecos', EnderecoController.editar);
routes.get('/endereco/selecionar', EnderecoController.listarUm);

routes.delete('/enderecos/apagar/', EnderecoController.apagar);

routes.post('/voluntario', VoluntarioControllers.store);
routes.put('/voluntario/:id', VoluntarioControllers.update);
routes.get('/voluntario', VoluntarioControllers.index);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);
routes.get('/voluntario/:id', VoluntarioControllers.show);

routes.get('/solicitacoes/:status/usuario/:tipo', SolicitacoesController.listarPorStatus);
routes.put('/solicitacoes/adicionar/voluntario/:id_solicitacoes', SolicitacoesController.adicionarVoluntario);
routes.put('/solicitacoes/cancelar/voluntario/:id_solicitacoes', SolicitacoesController.cancelarSolicitacao);
routes.put('/solicitacoes/concluir/:id_solicitacoes', SolicitacoesController.concluirSolicitação);

routes.post('/solicitacoes', SolicitacoesController.store);
routes.get('/solicitacoes', SolicitacoesController.index);
routes.get('/solicitacoes/:id', SolicitacoesController.show);
routes.delete('/solicitacoes/:id', SolicitacoesController.destroy);
routes.put('/solicitacoes/:id', SolicitacoesController.index);
routes.put('/solicitacoes/:id', SolicitacoesController.update);
routes.post('/usuarios/:id/solicitacoes', SolicitacoesController.store);

routes.get('/usuario/solicitacoes/abertas', UsuarioController.listarPorLocalizacao);

export default routes;