import UserRoute from './User';
import { Router, Request, Response } from 'express';

const DefaultRoute = Router();


DefaultRoute.get('/', (request: Request, response: Response) => {
    return response.json("OK");
});

export default ([DefaultRoute, UserRoute]);