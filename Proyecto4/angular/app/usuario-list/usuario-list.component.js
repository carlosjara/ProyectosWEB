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
var usuario_service_1 = require('../usuario/usuario.service');
var UsuarioComponent = (function () {
    function UsuarioComponent(usuarioService) {
        this.title2 = "[- Usuarios -]";
        this.usuarioList = [];
        this.usuarioService = usuarioService;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarios().subscribe(function (r) { return _this.usuarioList = r; });
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/usuario-list/usuario-list.template.html',
            providers: [usuario_service_1.usuarioService]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.usuarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario-list.component.js.map