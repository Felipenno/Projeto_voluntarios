import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);


export default routes;