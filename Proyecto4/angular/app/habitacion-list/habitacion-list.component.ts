import { Component } from '@angular/core';
import { Habitacion } from '../habitacion/habitacion';
import { habitacionService } from '../habitacion/habitacion.service';

@Component({
    templateUrl: 'app/habitacion-list/habitacion-list.template.html',
    providers: [habitacionService]
})
export class HabitacionComponent{
    title2:String = "[- Habitacion -]"; 
    habitacionList: Habitacion[] = [];
    private habitacionService:habitacionService;

    ngOnInit(): void {
        this.habitacionService.getHabitaciones().subscribe(r => this.habitacionList =r);
    }

    constructor(habitacionService: habitacionService){
        this.habitacionService = habitacionService;
    }

}
