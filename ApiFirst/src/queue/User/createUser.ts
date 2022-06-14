import RabbitMqServer from "../../model/rabbitmq-server";

export default class CreateUser {
    public message: any
    async create(): Promise<void>{
        const server = new RabbitMqServer('amqp://admin:admin@localhost:5672');
        await server.start();
        await server.consume('CreateUser', (message) => console.log(message));
        
    }
} 