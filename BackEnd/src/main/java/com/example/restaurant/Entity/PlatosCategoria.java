package com.example.restaurant.Entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class PlatosCategoria implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlatoCategoria;
    private String categoria;

    public PlatosCategoria() {
    }


    public Long getIdPlatoCategoria() {
        return idPlatoCategoria;
    }

    public void setIdPlatoCaregoria(Long idPlatoCaregoria) {
        this.idPlatoCategoria = idPlatoCaregoria;
    }

    public String getCategoriaPlato() {
        return categoria;
    }

    public void setCategoriaPlato(String categoriaPlato) {
        this.categoria = categoriaPlato;
    }
}
