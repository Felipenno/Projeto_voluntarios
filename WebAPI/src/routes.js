import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import VoluntarioControllers from './app/controllers/VoluntarioControllers';

const routes = new Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.editar);
routes.delete('/usuario/:id', UsuarioController.destroy);

routes.get('/voluntario', VoluntarioControllers.index);
routes.delete('/voluntario/:id', VoluntarioControllers.destroy);






export default routes;