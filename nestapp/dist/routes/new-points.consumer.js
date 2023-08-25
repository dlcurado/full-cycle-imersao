"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPointsConsumer = void 0;
const routes_driver_service_1 = require("./routes-driver/routes-driver.service");
const bull_1 = require("@nestjs/bull");
let NewPointsConsumer = class NewPointsConsumer {
    constructor(routesDriverService) {
        this.routesDriverService = routesDriverService;
    }
    async handle(job) {
        await this.routesDriverService.createOrUpdate(job.data);
        return {};
    }
};
exports.NewPointsConsumer = NewPointsConsumer;
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewPointsConsumer.prototype, "handle", null);
exports.NewPointsConsumer = NewPointsConsumer = __decorate([
    (0, bull_1.Processor)('new-points'),
    __metadata("design:paramtypes", [routes_driver_service_1.RoutesDriverService])
], NewPointsConsumer);
//# sourceMappingURL=new-points.consumer.js.map