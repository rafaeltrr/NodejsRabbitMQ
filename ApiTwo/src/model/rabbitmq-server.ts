import { Channel, connect, Connection } from "amqplib";

export default class RabbitMqServer {
    private conn: Connection;
    private channel: Channel;

    constructor(private uri: string) {}

    async start(): Promise<void>{
        this.conn = await connect(this.uri)
        this.channel = await this.conn.createChannel()
    }
}