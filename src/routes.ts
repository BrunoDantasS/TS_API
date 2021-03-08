import { Router, Request, Response } from "express";
import { deleteAdress, getAdress, getAdressById, postAdress, putAdress } from "./controller/AdressesControler";
import { getUsers, postUser, getUserById, putUser, deleteUser, login } from "./controller/UserController";
import { auth } from "./middlewares/auth"


const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    response.json({
        message: 'Hello World'
    });
});

routes.post('/session', login)

routes.use(auth)

routes.post('/user', postUser);
routes.get('/user', getUsers);
routes.get('/user/:id', getUserById);
routes.put('/user/:id', putUser);
routes.delete('/user/:id', deleteUser);

routes.post('/adress', postAdress);
routes.get('/adress', getAdress);
routes.get('/adress/:id', getAdressById);
routes.put('/adress/:id', putAdress);
routes.delete('/adress/:id', deleteAdress);

export default routes;
