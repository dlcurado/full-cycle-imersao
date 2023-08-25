"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSerializer = void 0;
class RouteSerializer {
    constructor(route) {
        this.id = route.id;
        this.name = route.name;
        this.source = route.source;
        this.destination = route.destination;
        this.distance = route.distance;
        this.duration = route.duration;
        this.directions = JSON.parse(route.directions);
        this.created_at = route.created_at;
        this.updated_at = route.updated_at;
    }
}
exports.RouteSerializer = RouteSerializer;
//# sourceMappingURL=router.serializer.js.map