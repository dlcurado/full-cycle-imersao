import { Queue } from 'bull';
import { Socket } from 'socket.io';
export declare class RoutesGateway {
    private newPointsQueue;
    constructor(newPointsQueue: Queue);
    handleMessage(client: Socket, payload: {
        route_id: string;
        lat: number;
        lng: number;
    }): Promise<void>;
}
