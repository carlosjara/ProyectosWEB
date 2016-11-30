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
var habitacion_service_1 = require('../habitacion/habitacion.service');
var HabitacionComponent = (function () {
    function HabitacionComponent(habitacionService) {
        this.title2 = "[- Habitacion -]";
        this.habitacionList = [];
        this.habitacionService = habitacionService;
    }
    HabitacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.habitacionService.getHabitaciones().subscribe(function (r) { return _this.habitacionList = r; });
    };
    HabitacionComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/habitacion-list/habitacion-list.template.html',
            providers: [habitacion_service_1.habitacionService]
        }), 
        __metadata('design:paramtypes', [habitacion_service_1.habitacionService])
    ], HabitacionComponent);
    return HabitacionComponent;
}());
exports.HabitacionComponent = HabitacionComponent;
//# sourceMappingURL=habitacion-list.component.js.map