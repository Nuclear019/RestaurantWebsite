package com.example.restaurant.Entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Reserva implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idReserva;
    private String nombreReserva;
    private String correoReserva;
    private Date fechaReserva;
    private Time horaReserva;
    private Date  fechaCreacionReserva;

    private Integer personasReserva;



    public Reserva() {
    }

    public Reserva(long idReserva, String nombreReserva, String correoReserva, Date fechaReserva, Time horaReserva, Date fechaCreacionReserva, Integer personasReserva) {
        this.idReserva = idReserva;
        this.nombreReserva = nombreReserva;
        this.correoReserva = correoReserva;
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.fechaCreacionReserva = fechaCreacionReserva;
        this.personasReserva = personasReserva;
    }

    public long getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(long idReserva) {
        this.idReserva = idReserva;
    }

    public String getNombreReserva() {
        return nombreReserva;
    }

    public void setNombreReserva(String nombreReserva) {
        this.nombreReserva = nombreReserva;
    }

    public String getCorreoReserva() {
        return correoReserva;
    }

    public void setCorreoReserva(String correoReserva) {
        this.correoReserva = correoReserva;
    }

    public Date getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(Date fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    public Time getHoraReserva() {
        return horaReserva;
    }

    public void setHoraReserva(Time horaReserva) {
        this.horaReserva = horaReserva;
    }

    public Date getFechaCreacionReserva() {
        return fechaCreacionReserva;
    }

    public void setFechaCreacionReserva(Date fechaCreacionReserva) {
        this.fechaCreacionReserva = fechaCreacionReserva;
    }

    public Integer getPersonasReserva() {
        return personasReserva;
    }

    public void setPersonasReserva(Integer personasReserva) {
        this.personasReserva = personasReserva;
    }


}
