import { Component } from '@angular/core';
import { Reserva } from '../reserva/reserva';
import { reservaService } from '../reserva/reserva.service';
import { RouterModule,Routes, Router,Params } from '@angular/router';

@Component({
    templateUrl: 'app/reserva-list/reserva-list.template.html',
    providers: [reservaService]
})
export class ReservaComponent{
    title2: String = "[ - Reserva - ]"; 
    reservaList: Reserva[] = [];
    private reservaService:reservaService;

    ngOnInit(): void {
        this.reservaService.getReserva().subscribe(r => this.reservaList =r);
    }

    constructor(reservaService: reservaService, private router:Router){
        this.reservaService = reservaService;
    }

    onUserSelect(){
        this.router.navigate(['usuario'])
    }

    onReservaDelete(id:number): void{
        console.log(id);
        this.reservaService.deleteReserva(id);  
    }

}
