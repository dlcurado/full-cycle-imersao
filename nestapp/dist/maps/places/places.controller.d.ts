import { PlacesService } from './places.service';
export declare class PlacesController {
    private placeService;
    constructor(placeService: PlacesService);
    findPlace(text: string): Promise<import("@googlemaps/google-maps-services-js").FindPlaceFromTextResponseData>;
}
