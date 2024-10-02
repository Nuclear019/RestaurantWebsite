package com.example.restaurant.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")

    private Time horaReserva;
    private Date  fechaCreacionReserva;

    private Integer personasReserva;

    private String detallesReserva;

    @ManyToOne
    @JoinColumn(name = "IdMesa")
    private Mesa mesa;

    public Reserva( ) {
    }

    public Reserva(long idReserva, String nombreReserva, String correoReserva, Date fechaReserva, Time horaReserva, Date fechaCreacionReserva, Integer personasReserva, String detallesReserva, Mesa mesa) {
        this.idReserva = idReserva;
        this.nombreReserva = nombreReserva;
        this.correoReserva = correoReserva;
        this.fechaReserva = fechaReserva;
        this.horaReserva = horaReserva;
        this.fechaCreacionReserva = fechaCreacionReserva;
        this.personasReserva = personasReserva;
        this.detallesReserva = detallesReserva;
        this.mesa = mesa;
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


    public String getDetallesReserva() {
        return detallesReserva;
    }

    public void setDetallesReserva(String detallesReserva) {
        this.detallesReserva = detallesReserva;
    }

    public Mesa getMesa() {
        return mesa;
    }

    public void setMesa(Mesa mesa) {
        this.mesa = mesa;
    }
}
