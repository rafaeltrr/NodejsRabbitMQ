import RabbitMqServer from "../../model/rabbitmq-server";

export default class CreateUser {
    async create(body: any): Promise<any>{
        const server = new RabbitMqServer('amqp://admin:admin@localhost:5672');
        await server.start();
    }
} 