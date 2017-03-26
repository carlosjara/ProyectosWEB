package co.puj.javeriana.web.controllers;

import co.puj.javeriana.web.services.ReservaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@RestController
@CrossOrigin
public class ReservaResource {

    private final ReservaService reservaService;

    public ReservaResource(ReservaService reservaService) {
        this.reservaService = reservaService;
    }
    @GetMapping(value = "/rest/reserva")
    public List<Reserva> getAll(){
        return reservaService.findAll();
    }


    @PostMapping(value = "/rest/reserva")
    public void insert(@RequestBody Reserva reserva){
        reservaService.save(reserva);
    }


    @DeleteMapping(value = "/rest/reserva/{reserva_id}")
    public void delete (@PathVariable("reserva_id") long reserva_id){
        reservaService.delete(reserva_id);
    }

    @GetMapping(value = "/rest/reserva/{reserva_id}")
    public  Reserva getById (@PathVariable("reserva_id") long reserva_id){
        return reservaService.findOne(reserva_id);
    }

}
