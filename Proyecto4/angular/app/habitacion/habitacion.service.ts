import { Habitacion } from './habitacion';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Import RxJs required methods
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class habitacionService {
    
    // private instance variable to hold base url
     private Url:String = 'http://localhost:9396';
    // Resolve HTTP using the constructor
     constructor (private http: Http) {}   
    getHabitaciones(): Observable<Habitacion[]> {
        return this.http.get(this.Url+"/rest/habitaciones").map(r => r.json());
    }

    getHabitacionesById(id:number):Observable<Habitacion>{
        return this.http.get(this.Url+"/rest/habitaciones/"+id.toString()).map(r => r.json());
    }

    
}