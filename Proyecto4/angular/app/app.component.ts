import { Component } from '@angular/core';
import { Reserva } from './reserva/reserva';
import { reservaService } from './reserva/reserva.service';
import { Routes} from '@angular/router';
 
/*
*para poder aplicar el controlador se debe usar el modulo router EN app.module para 
* hacer el papel del portero
*/

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})
export class AppComponent{ 
    title: String = "[ - Hotel - ]";
}
