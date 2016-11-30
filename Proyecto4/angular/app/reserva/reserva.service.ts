import { Reserva } from './reserva';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Import RxJs required methods
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class reservaService {
    
    // private instance variable to hold base url
     private Url:String = 'http://localhost:9396';
    // Resolve HTTP using the constructor
     constructor (private http: Http) {}   
    getReserva(): Observable<Reserva[]> {
        return this.http.get(this.Url+"/rest/reserva").map(r => r.json());
    }

    getReservaById(id:number):Observable<Reserva>{
        return this.http.get(this.Url+"/rest/reserva/"+id.toString()).map(r => r.json());
    }

    deleteReserva(id:number) : Observable<Reserva[]> {
        return this.http.delete(this.Url+id.toString()) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    
    }
 
    save(reserva:Reserva):void{
        console.log("Guardando En el Servicio",reserva);
    }

}