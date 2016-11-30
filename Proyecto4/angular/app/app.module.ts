import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes , Router,Params } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ReservaComponent }  from './reserva-list/reserva-list.component';
import { UsuarioComponent }  from './usuario-list/usuario-list.component';
import { HabitacionComponent }  from './habitacion-list/habitacion-list.component';

const direcciones: Routes = [
   {path: '', redirectTo: 'reserva', pathMatch: 'full'},
    {path: 'reserva', component: ReservaComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'habitacion', component: HabitacionComponent}
];

@NgModule({
  imports:      [ FormsModule,BrowserModule,HttpModule, RouterModule.forRoot(direcciones)],
  declarations: [ AppComponent, ReservaComponent, UsuarioComponent, HabitacionComponent ],
  exports : [RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
