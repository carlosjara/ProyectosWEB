package co.puj.javeriana.web.services;

import co.puj.javeriana.web.controllers.Habitacion;
import co.puj.javeriana.web.persistence.HabitacionDB;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Service
public class HabitacionService {
    private HabitacionDB habitacionDB;

    public HabitacionService(HabitacionDB habitacionDB) {
        this.habitacionDB = habitacionDB;
    }

    public List<Habitacion> findAll() {
        return this.habitacionDB.findAll();
    }

    public Habitacion findOne(long habitacion_id) {
        return this.habitacionDB.findOne(habitacion_id);
    }
}

