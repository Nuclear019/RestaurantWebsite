package com.example.restaurant.Entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Platos implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlato;
    private String nombrePlato;
    private String detallesPlato;
    private Double precioPlato;
    
    private String imagenPlato;

    private boolean masVendido;

    public PlatosCategoria getPlatoCategoria() {
        return platoCategoria;
    }

    public void setPlatoCategoria(PlatosCategoria platoCategoria) {
        this.platoCategoria = platoCategoria;
    }

    @ManyToOne
    @JoinColumn(name = "idPlatoCategoria")
    private PlatosCategoria platoCategoria;

    public Platos() {
    }
    
    public Platos(Long idPlato, String nombrePlato, String detallesPlato, double precioPlato, String imagenPlato) {
        this.idPlato = idPlato;
        this.nombrePlato = nombrePlato;
        this.detallesPlato = detallesPlato;
        this.precioPlato = precioPlato;
        this.imagenPlato = imagenPlato;
    }


    public Long getIdPlato() {
        return idPlato;
    }

    public void setIdPlato(Long idPlato) {
        this.idPlato = idPlato;
    }

    public String getNombrePlato() {
        return nombrePlato;
    }

    public void setNombrePlato(String nombrePlato) {
        this.nombrePlato = nombrePlato;
    }

    public String getDetallesPlato() {
        return detallesPlato;
    }

    public void setDetallesPlato(String detallesPlato) {
        this.detallesPlato = detallesPlato;
    }

    public Double getPrecioPlato() {
        return precioPlato;
    }

    public void setPrecioPlato(Double precioPlato) {
        this.precioPlato = precioPlato;
    }

    public String getImagenPlato() {
        return imagenPlato;
    }

    public void setImagenPlato(String imagenPlato) {
        this.imagenPlato = imagenPlato;
    }

    public boolean isMasVendido() {
        return masVendido;
    }

    public void setMasVendido(boolean masVendido) {
        this.masVendido = masVendido;
    }

    public PlatosCategoria getIdPlatoCategoria() {
        return platoCategoria;
    }

    public void setIdPlatoCategoria(PlatosCategoria idPlatoCategoria) {
        platoCategoria = idPlatoCategoria;
    }
}
