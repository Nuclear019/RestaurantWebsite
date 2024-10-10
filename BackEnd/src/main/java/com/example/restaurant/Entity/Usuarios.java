package com.example.restaurant.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;

@Entity
public class Usuarios implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    private String username;
    private String password;

    private String rolUsuario;

    private String correoUsuario;

    private String telefonoUsuario;



    public Usuarios() {
    }

    public Usuarios(Long idUsuario, String user, String password) {
        this.idUsuario = idUsuario;
        this.username = user;
        this.password = password;
    }

    public Usuarios(Long idUsuario, String user, String password, String rolUsuario, String correoUsuario, String telefonoUsuario) {
        this.idUsuario = idUsuario;
        this.username = user;
        this.password = password;
        this.rolUsuario = rolUsuario;
        this.correoUsuario = correoUsuario;
        this.telefonoUsuario = telefonoUsuario;
    }




    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String user) {
        this.username = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRolUsuario() {
        return rolUsuario;
    }

    public void setRolUsuario(String rolUsuario) {
        this.rolUsuario = rolUsuario;
    }

    public String getCorreoUsuario() {
        return correoUsuario;
    }

    public void setCorreoUsuario(String correoUsuario) {
        this.correoUsuario = correoUsuario;
    }

    public String getTelefonoUsuario() {
        return telefonoUsuario;
    }

    public void setTelefonoUsuario(String telefonoUsuario) {
        this.telefonoUsuario = telefonoUsuario;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "user='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

}
