import { Job } from 'bull';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
export declare class NewPointsConsumer {
    private routesDriverService;
    constructor(routesDriverService: RoutesDriverService);
    handle(job: Job<{
        route_id: string;
        lat: number;
        lng: number;
    }>): Promise<{}>;
}
