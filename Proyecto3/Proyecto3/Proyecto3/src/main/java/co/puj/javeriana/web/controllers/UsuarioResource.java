package co.puj.javeriana.web.controllers;

import co.puj.javeriana.web.services.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@RestController
@CrossOrigin
public class UsuarioResource {

    private final UsuarioService usuarioService;

    public UsuarioResource(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    @GetMapping(value = "/rest/usuarios")
    public List<Usuarios> getAll(){
        return usuarioService.findAll();
    }
    @GetMapping(value = "/rest/usuarios/{usuario_id}")
    public  Usuarios getById (@PathVariable("usuario_id") long usuario_id){
        return usuarioService.findOne(usuario_id);
    }

}
