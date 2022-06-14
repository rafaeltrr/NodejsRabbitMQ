import { Router, Request, Response } from 'express';
import CreateUser from './createUser';
const route = Router();

route.post('/user', async (req: Request, res: Response): Promise<any> => {
    const createUser = new CreateUser()
    const response = await createUser.create(req.body);
    return res.send(response);
});

export default route