package co.puj.javeriana.web.controllers;

import javax.persistence.*;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Entity
public class Reserva {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long Reserva_id;
    @Column
    private  String estado_reserva;
    @Column
    private  String fecha_inicio;
    @Column
    private  String fecha_fin;
    @Column
    private  int habitacion;
    @Column
    private  int usuario;

    public long getReserva_id() {
        return Reserva_id;
    }

    public void setReserva_id(long reserva_id) {
        Reserva_id = reserva_id;
    }

    public String getEstado_reserva() {
        return estado_reserva;
    }

    public void setEstado_reserva(String estado_reserva) {
        this.estado_reserva = estado_reserva;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_fin() {
        return fecha_fin;
    }

    public void setFecha_fin(String fecha_fin) {
        this.fecha_fin = fecha_fin;
    }

    public int getHabitacion() {
        return habitacion;
    }

    public void setHabitacion(int habitacion) {
        this.habitacion = habitacion;
    }

    public int getUsuario() {
        return usuario;
    }

    public void setUsuario(int usuario) {
        this.usuario = usuario;
    }
}
