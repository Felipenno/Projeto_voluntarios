import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.listar);



export default routes;