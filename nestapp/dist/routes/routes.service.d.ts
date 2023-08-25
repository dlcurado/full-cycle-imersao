import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { DirectionsService } from '../maps/directions/directions.service';
export declare class RoutesService {
    private prismaService;
    private directionsService;
    constructor(prismaService: PrismaService, directionsService: DirectionsService);
    create(createRouteDto: CreateRouteDto): Promise<{
        id: string;
        name: string;
        distance: number;
        duration: number;
        directions: import(".prisma/client").Prisma.JsonValue;
        created_at: Date;
        updated_at: Date;
    } & {
        source: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
        destination: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        id: string;
        name: string;
        distance: number;
        duration: number;
        directions: import(".prisma/client").Prisma.JsonValue;
        created_at: Date;
        updated_at: Date;
    } & {
        source: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
        destination: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RouteClient<{
        id: string;
        name: string;
        distance: number;
        duration: number;
        directions: import(".prisma/client").Prisma.JsonValue;
        created_at: Date;
        updated_at: Date;
    } & {
        source: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
        destination: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateRouteDto: UpdateRouteDto): string;
    remove(id: number): string;
}
