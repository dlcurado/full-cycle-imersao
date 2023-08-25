import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteSerializer } from './router.serializer';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    create(createRouteDto: CreateRouteDto): Promise<RouteSerializer>;
    findAll(): Promise<RouteSerializer[]>;
    findOne(id: string): Promise<RouteSerializer>;
    update(id: string, updateRouteDto: UpdateRouteDto): string;
    remove(id: string): string;
}
