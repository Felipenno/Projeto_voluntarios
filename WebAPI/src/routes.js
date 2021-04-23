import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.put('/usuarios/:id', UsuarioController.update);


export default routes;