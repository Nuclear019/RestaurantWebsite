package com.example.restaurant.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "Mesas")
public class Mesa {
    @Id
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    private int idMesa;

    @Column(name = "capacidad")
    private int capacidad;

    @Column(name = "ocupada")
    private boolean ocupada;
}
