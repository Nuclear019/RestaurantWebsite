package com.example.restaurant.Entity;

import jakarta.persistence.Entity;

@Entity
public class PlatoCategoria {

    private int idPlato;
    private String categoriaPlato;

    public PlatoCategoria() {
    }

    public PlatoCategoria(int idPlato, String categoriaPlato) {
        this.idPlato = idPlato;
        this.categoriaPlato = categoriaPlato;
    }

    public int getIdPlato() {
        return idPlato;
    }

    public void setIdPlato(int idPlato) {
        this.idPlato = idPlato;
    }

    public String getCategoriaPlato() {
        return categoriaPlato;
    }

    public void setCategoriaPlato(String categoriaPlato) {
        this.categoriaPlato = categoriaPlato;
    }
}
