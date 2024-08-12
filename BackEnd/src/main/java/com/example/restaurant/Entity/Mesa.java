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
    private int idMesa;

    @Column(name = "capacidadMesa")
    private int capacidad;

    @Column(name = "ocupada")
    private boolean ocupada;

    public Mesa() {
    }
    public Mesa(int capacidad, boolean ocupada) {
        this.capacidad = capacidad;
        this.ocupada = ocupada;
    }

    public int getIdMesa() {
        return idMesa;
    }

    public void setIdMesa(int idMesa) {
        this.idMesa = idMesa;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public boolean isOcupada() {
        return ocupada;
    }

    public void setOcupada(boolean ocupada) {
        this.ocupada = ocupada;
    }
}
