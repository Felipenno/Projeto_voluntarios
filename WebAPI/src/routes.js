import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);


export default routes;