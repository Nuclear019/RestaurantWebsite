package com.example.restaurant.Controller;

import com.example.restaurant.Entity.Plato;
import com.example.restaurant.Entity.Reserva;
import com.example.restaurant.Service.PlatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class PlatoCotroller {

    @Autowired
    PlatoService platoService;

    public PlatoCotroller(PlatoService platoService) {
        this.platoService = platoService;
    }

    @GetMapping("/platos")
    public ResponseEntity<List<Plato>> getPlatos() {
        List<Plato> platos = platoService.getPlatos();
        return ResponseEntity.ok().body(platos);
    }

    @PostMapping("/add-plato")
    public void addReserva(@RequestBody Plato plato){
        platoService.addPlato(plato);
    }

}
