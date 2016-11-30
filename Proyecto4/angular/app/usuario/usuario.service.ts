import { Usuario } from './usuario';
import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Import RxJs required methods
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class usuarioService {
    
    // private instance variable to hold base url
     private Url:String = 'http://localhost:9396';
    // Resolve HTTP using the constructor
     constructor (private http: Http) {}   
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.Url+"/rest/usuarios").map(r => r.json());
    }

    getUsuariosById(id:number):Observable<Usuario>{
        return this.http.get(this.Url+"/rest/usuarios/"+id.toString()).map(r => r.json());
    }

    
}