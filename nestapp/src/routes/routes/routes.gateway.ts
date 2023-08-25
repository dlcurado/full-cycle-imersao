import { InjectQueue } from '@nestjs/bull';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Queue } from 'bull';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoutesGateway {
  constructor(@InjectQueue('new-points') private newPointsQueue: Queue) {}

  @SubscribeMessage('new-points')
  async handleMessage(
    client: Socket,
    payload: {
      route_id: string;
      lat: number;
      lng: number;
    },
  ) {
    // Notifica primeiro os interessados nesse processamento
    client.broadcast.emit('admin-new-points', payload);
    client.broadcast.emit(`new-points/${payload.route_id}`, payload);
    // Pq agora estamos adicionando em uma fila, que pode ser processada
    // posteriormente. Aqui garantimos um pouco mais de resiliencia
    // da aplicacao
    await this.newPointsQueue.add(payload);
  }
}
