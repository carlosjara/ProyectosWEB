"use strict";
var Reserva = (function () {
    function Reserva(reserva_id, estado_reserva, fecha_inicio, fecha_fin, habitacion, usuario) {
        this.reserva_id = reserva_id;
        this.estado_reserva = estado_reserva;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.habitacion = habitacion;
        this.usuario = usuario;
    }
    return Reserva;
}());
exports.Reserva = Reserva;
//# sourceMappingURL=reserva.js.map