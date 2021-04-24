import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);

routes.post('/voluntario', VoluntarioControllers.store);

routes.put('/voluntario/:id', VoluntarioControllers.update);

export default routes;