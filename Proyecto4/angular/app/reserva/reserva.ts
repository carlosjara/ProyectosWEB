export class Reserva{
    constructor(
        private reserva_id:number,
        private estado_reserva:string,
        private fecha_inicio:string,
        private fecha_fin:string,
        private habitacion:number,
        private usuario:number){}
}