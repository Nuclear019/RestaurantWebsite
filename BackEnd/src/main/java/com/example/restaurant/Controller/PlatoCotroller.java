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

    @PostMapping("/add-plato")
          public void addReserva(@RequestBody Platos plato){
              platoService.addPlato(plato);
         }


    @GetMapping(value = "/platos", name = "platoCategoria", params = "idPlatoCategoria")
    public List<Platos> getPlatosByCategoria(@RequestParam Long idPlatoCategoria) {
        return platoService.findAllByPlatoCategoriaId(idPlatoCategoria);
    }

    @PutMapping("/platos/{id}")
    public void updatePlato(@PathVariable Long id, @RequestBody Platos plato){
        platoService.updatePlato(id, plato);
    }

    @GetMapping(value = "/platos/masVendidos")
    public List<Platos> getPlatosByCategoria() {
        return platoService.findPlatosMasVendidos();
    }

    @DeleteMapping("/platos/{id}")
    public void deletePlato(@PathVariable Long id){
        platoService.deletePlato(id);
    }

}
