package co.puj.javeriana.web.controllers;

import javax.persistence.*;
/**
 * Created by Camargo-Jaramillo on 28/11/2016.
 */

@Entity
public class Usuarios {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long usuario_id;
    @Column
    private  String name;
    @Column
    private  String direccion;
    @Column
    private  int telefono;

    public long getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(long usuario_id) {
        this.usuario_id = usuario_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
}
