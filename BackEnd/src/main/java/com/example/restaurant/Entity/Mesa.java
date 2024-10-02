package com.example.restaurant.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
public class Mesa implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idMesa;

    @Column(name = "capacidadMesa")
    private int capacidad;


    public Mesa() {
    }
    public Mesa(int capacidad, boolean ocupada) {
        this.capacidad = capacidad;
    }

    public long getIdMesa() {
        return idMesa;
    }

    public void setIdMesa(long idMesa) {
        this.idMesa = idMesa;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }


}
