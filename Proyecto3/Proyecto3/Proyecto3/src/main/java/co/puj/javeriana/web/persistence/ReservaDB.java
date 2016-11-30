package co.puj.javeriana.web.persistence;


import co.puj.javeriana.web.controllers.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

public interface ReservaDB extends JpaRepository<Reserva, Long> {

}
