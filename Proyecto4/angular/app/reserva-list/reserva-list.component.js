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
var core_1 = require('@angular/core');
var reserva_service_1 = require('../reserva/reserva.service');
var router_1 = require('@angular/router');
var ReservaComponent = (function () {
    function ReservaComponent(reservaService, router) {
        this.router = router;
        this.title2 = "[ - Reserva - ]";
        this.reservaList = [];
        this.reservaService = reservaService;
    }
    ReservaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reservaService.getReserva().subscribe(function (r) { return _this.reservaList = r; });
    };
    ReservaComponent.prototype.onUserSelect = function () {
        this.router.navigate(['usuario']);
    };
    ReservaComponent.prototype.onReservaDelete = function (id) {
        console.log(id);
        this.reservaService.deleteReserva(id);
    };
    ReservaComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/reserva-list/reserva-list.template.html',
            providers: [reserva_service_1.reservaService]
        }), 
        __metadata('design:paramtypes', [reserva_service_1.reservaService, router_1.Router])
    ], ReservaComponent);
    return ReservaComponent;
}());
exports.ReservaComponent = ReservaComponent;
//# sourceMappingURL=reserva-list.component.js.map