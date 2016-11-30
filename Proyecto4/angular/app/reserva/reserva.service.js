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
var http_1 = require('@angular/http');
// Import RxJs required methods
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var reservaService = (function () {
    // Resolve HTTP using the constructor
    function reservaService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.Url = 'http://localhost:9396';
    }
    reservaService.prototype.getReserva = function () {
        return this.http.get(this.Url + "/rest/reserva").map(function (r) { return r.json(); });
    };
    reservaService.prototype.getReservaById = function (id) {
        return this.http.get(this.Url + "/rest/reserva/" + id.toString()).map(function (r) { return r.json(); });
    };
    reservaService.prototype.deleteReserva = function (id) {
        return this.http.delete(this.Url + id.toString()) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    reservaService.prototype.save = function (reserva) {
        console.log("Guardando En el Servicio", reserva);
    };
    reservaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], reservaService);
    return reservaService;
}());
exports.reservaService = reservaService;
//# sourceMappingURL=reserva.service.js.map