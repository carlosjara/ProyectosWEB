package co.puj.javeriana.web.controllers;

import co.puj.javeriana.web.services.HabitacionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@RestController
public class HabitacionResource {

    private final HabitacionService habitacionService;

    public HabitacionResource(HabitacionService habitacionService) {
        this.habitacionService = habitacionService;
    }
    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping(value = "/rest/habitaciones")
    public List<Habitacion> getAll(){
        return habitacionService.findAll();
    }
    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping(value = "/rest/habitaciones/{habitacion_id}")
    public  Habitacion getById (@PathVariable("habitacion_id") long habitacion_id){
        return habitacionService.findOne(habitacion_id);
    }

}
