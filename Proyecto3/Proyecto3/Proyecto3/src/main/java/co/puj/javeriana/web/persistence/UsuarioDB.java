package co.puj.javeriana.web.persistence;


import co.puj.javeriana.web.controllers.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

public interface UsuarioDB extends JpaRepository<Usuarios, Long> {

}
