import { Router, Request, Response } from 'express';
const route = Router();

route.get('/user', (request: Request, response: Response) => {
    return response.json("Users");
});

export default route