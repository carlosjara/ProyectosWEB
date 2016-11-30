package co.puj.javeriana.web.services;

import co.puj.javeriana.web.controllers.Usuarios;
import co.puj.javeriana.web.persistence.UsuarioDB;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Service
public class UsuarioService {
    private UsuarioDB usuarioDB;

    public UsuarioService(UsuarioDB usuarioDB) {
        this.usuarioDB = usuarioDB;
    }

    public List<Usuarios> findAll() {
        return this.usuarioDB.findAll();
    }

    public Usuarios findOne(long usuario_id) {
        return this.usuarioDB.findOne(usuario_id);
    }
}

