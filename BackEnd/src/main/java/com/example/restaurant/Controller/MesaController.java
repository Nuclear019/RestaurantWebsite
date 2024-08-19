package com.example.restaurant.Controller;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Service.MesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class MesaController {
    @Autowired
    private MesaService mesaService;
    @GetMapping("/mesas")
    public List<Mesa> getMesas(){
        return mesaService.getMesas();
    }

    @PostMapping("/mesas")
    public void addMesa(@RequestBody Mesa mesa){
        mesaService.addMesa(mesa);
    }

    @GetMapping("/mesas/{id}")
    public ResponseEntity<Mesa> listarMesaPorId(@PathVariable Long id){
        Mesa mesa = mesaService.listarMesaPorId(id);
        return ResponseEntity.ok().body(mesa);
    }

    @PutMapping("/mesas/{id}")
    public ResponseEntity<Mesa> updateMesa(@PathVariable Long id, @RequestBody Mesa mesa){
        Mesa mesaActualizada = mesaService.updateMesa(id, mesa);
        return ResponseEntity.ok().body(mesaActualizada);
    }

    @DeleteMapping("/mesas/{id}")
    public ResponseEntity<?> deleteMesa(@PathVariable Long id){
        mesaService.deleteMesa(id);
        return ResponseEntity.ok().build();
    }
}
