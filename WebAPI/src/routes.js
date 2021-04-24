import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.editar);
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.get('/voluntario', VoluntarioControllers.index);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);






export default routes;