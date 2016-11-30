package co.puj.javeriana.web.controllers;

import javax.persistence.*;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Entity
public class Habitacion {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long Habitacion_id;
    @Column
    private  int Tipo_Habitacion;
    @Column
    private  String Estado_Habitacion;

    public long getHabitacion_id() {
        return Habitacion_id;
    }

    public void setHabitacion_id(long habitacion_id) {
        Habitacion_id = habitacion_id;
    }

    public int getTipo_Habitacion() {
        return Tipo_Habitacion;
    }

    public void setTipo_Habitacion(int tipo_Habitacion) {
        Tipo_Habitacion = tipo_Habitacion;
    }

    public String getEstado_Habitacion() {
        return Estado_Habitacion;
    }

    public void setEstado_Habitacion(String estado_Habitacion) {
        Estado_Habitacion = estado_Habitacion;
    }
}
