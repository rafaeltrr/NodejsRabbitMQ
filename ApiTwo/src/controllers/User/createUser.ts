import RabbitMqServer from "../../model/rabbitmq-server";
import { v4 as uuidv4 } from 'uuid';
export default class CreateUser {
    async create(body: any): Promise<any>{
        const server = new RabbitMqServer('amqp://admin:admin@localhost:5672');
        await server.start();

        const payload = {
            id: uuidv4(),
            ...body
        }
        await server.publishInQueue('CreateUser', JSON.stringify(payload));
        
    }
} 