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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesGateway = void 0;
const bull_1 = require("@nestjs/bull");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let RoutesGateway = class RoutesGateway {
    constructor(newPointsQueue) {
        this.newPointsQueue = newPointsQueue;
    }
    async handleMessage(client, payload) {
        client.broadcast.emit('admin-new-points', payload);
        client.broadcast.emit(`new-points/${payload.route_id}`, payload);
        await this.newPointsQueue.add(payload);
    }
};
exports.RoutesGateway = RoutesGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('new-points'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], RoutesGateway.prototype, "handleMessage", null);
exports.RoutesGateway = RoutesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __param(0, (0, bull_1.InjectQueue)('new-points')),
    __metadata("design:paramtypes", [Object])
], RoutesGateway);
//# sourceMappingURL=routes.gateway.js.map