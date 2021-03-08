import { Router, Request, Response } from "express";
import { getUsers, postUser, getUserById, putUser, deleteUser } from "./controller/UserController";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    response.json({
        message: 'Hello World'
    });
});

routes.post('/user', postUser);
routes.get('/user', getUsers);
routes.get('/user/:id', getUserById);
routes.put('/user/:id', putUser);
routes.delete('/user/:id', deleteUser);


export default routes;