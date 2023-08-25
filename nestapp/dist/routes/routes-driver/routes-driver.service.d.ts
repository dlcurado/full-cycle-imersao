import { PrismaService } from '../../prisma/prisma/prisma.service';
export declare class RoutesDriverService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createOrUpdate(dto: {
        route_id: string;
        lat: number;
        lng: number;
    }): Promise<{
        route: {
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
        };
    } & {
        id: string;
        route_id: string;
        created_at: Date;
        updated_at: Date;
    } & {
        points: ({
            created_at: Date;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        })[];
    }>;
}
