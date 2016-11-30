package co.puj.javeriana.web.services;

import co.puj.javeriana.web.controllers.Reserva;
import co.puj.javeriana.web.persistence.ReservaDB;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Service
public class ReservaService {
    private ReservaDB reservaDB;

    public ReservaService(ReservaDB reservaDB) {
        this.reservaDB = reservaDB;
    }

    public List<Reserva> findAll() {
        return this.reservaDB.findAll();
    }

    public void save(Reserva reserva) {
        this.reservaDB.save(reserva);
    }

    public void delete(long reserva_id) {
        this.reservaDB.delete(reserva_id);
    }

    public Reserva findOne(long reserva_id) {
        return this.reservaDB.findOne(reserva_id);
    }
}
