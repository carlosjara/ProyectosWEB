import { Component } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { usuarioService } from '../usuario/usuario.service';

@Component({
    templateUrl: 'app/usuario-list/usuario-list.template.html',
    providers: [usuarioService]
})
export class UsuarioComponent{
    title2:String = "[- Usuarios -]"; 
    usuarioList: Usuario[] = [];
    private usuarioService:usuarioService;

    ngOnInit(): void {
        this.usuarioService.getUsuarios().subscribe(r => this.usuarioList =r);
    }

    constructor(usuarioService: usuarioService){
        this.usuarioService = usuarioService;
    }

}
