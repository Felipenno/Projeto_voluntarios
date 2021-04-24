import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);

routes.get('/usuarios', UsuarioController.index);


routes.put('/usuario/:id', UsuarioController.editar);
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.get('/voluntario', VoluntarioControllers.index);






export default routes;