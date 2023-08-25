"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesModule = void 0;
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const routes_controller_1 = require("./routes.controller");
const maps_module_1 = require("../maps/maps.module");
const routes_driver_service_1 = require("./routes-driver/routes-driver.service");
const routes_gateway_1 = require("./routes/routes.gateway");
const bull_1 = require("@nestjs/bull");
const new_points_consumer_1 = require("./new-points.consumer");
let RoutesModule = class RoutesModule {
};
exports.RoutesModule = RoutesModule;
exports.RoutesModule = RoutesModule = __decorate([
    (0, common_1.Module)({
        imports: [maps_module_1.MapsModule, bull_1.BullModule.registerQueue({ name: 'new-points' })],
        controllers: [routes_controller_1.RoutesController],
        providers: [
            routes_service_1.RoutesService,
            routes_driver_service_1.RoutesDriverService,
            routes_gateway_1.RoutesGateway,
            new_points_consumer_1.NewPointsConsumer,
        ],
    })
], RoutesModule);
//# sourceMappingURL=routes.module.js.map