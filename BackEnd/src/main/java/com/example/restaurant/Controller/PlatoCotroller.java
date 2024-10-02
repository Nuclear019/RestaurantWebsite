package com.example.restaurant.Controller;

import com.example.restaurant.Entity.Platos;
import com.example.restaurant.Service.PlatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class PlatoCotroller {

    @Autowired
    PlatoService platoService;


    @GetMapping("/platos")
    public List<Platos> getPlatos() {
        List<Platos> platos = platoService.getPlatos();
        return platos;
    }

    /**
     *
     * @PostMapping("/add-plato")
     *     public void addReserva(@RequestBody Plato plato){
     *         platoService.addPlato(plato);
     *     }
     *
     *
     *     @GetMapping("/platos/{idCategoriaPlato}")
     *     public List<Plato> getPlatosByCategoria(@PathVariable Long idCategoriaPlato) {
     *         List<Plato> platos = platoService.getPlatosByCategoria(idCategoriaPlato);
     *         return platos;
     *     }
     *
     */

}
