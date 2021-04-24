import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.listar);
routes.put('/usuario/:id', UsuarioController.editar);





export default routes;