package com.example.restaurant.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Plato {

    @Id
    private int idPlato;
    private String nombrePlato;
    private String detallesPlato;
    private double precioPlato;
    
    private String imagenPlato;

    private boolean masVendido;

    @OneToOne
    private PlatoCategoria categoriaPlato;
    
    
    public Plato() {
    }
    
    public Plato(int idPlato, String nombrePlato, String detallesPlato, double precioPlato, String imagenPlato) {
        this.idPlato = idPlato;
        this.nombrePlato = nombrePlato;
        this.detallesPlato = detallesPlato;
        this.precioPlato = precioPlato;
        this.imagenPlato = imagenPlato;
    }


    
    
    

}
