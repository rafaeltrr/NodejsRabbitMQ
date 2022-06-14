import { Channel, connect, Connection, Message } from "amqplib";

export default class RabbitMqServer {
    private conn: Connection;
    private channel: Channel;

    constructor(private uri: string) {}

    async start(): Promise<void>{
        this.conn = await connect(this.uri)
        this.channel = await this.conn.createChannel()
    }

    async publishInQueue(queue: string, message: string){
        return this.channel.sendToQueue(queue, Buffer.from(message))
    }

    async consume(queue: string, callback: (message:Message) => void){
        return this.channel.consume(queue, (message) => {
            callback(JSON.parse(message.content.toString()))
            this.channel.ack(message)
        })
    }
}