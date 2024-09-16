package com.example.restaurant.Controller;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Service.MesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class MesaController {

    @Autowired
    private MesaService mesaService;

    // Obtener todas las mesas
    @GetMapping("/mesas")
    public List<Mesa> getMesas(){
        return mesaService.getMesas();
    }

    // Añadir una mesa nueva
    @PostMapping("/mesas")
    public void addMesa(@RequestBody Mesa mesa){
        mesaService.addMesa(mesa);
    }

    // Obtener una mesa por ID
    @GetMapping("/mesas/{id}")
    public ResponseEntity<Mesa> listarMesaPorId(@PathVariable Long id){
        Mesa mesa = mesaService.listarMesaPorId(id);
        return ResponseEntity.ok().body(mesa);
    }

    // Actualizar una mesa
    @PutMapping("/mesas/{id}")
    public ResponseEntity<Mesa> updateMesa(@PathVariable Long id, @RequestBody Mesa mesa){
        Mesa mesaActualizada = mesaService.updateMesa(id, mesa);
        return ResponseEntity.ok().body(mesaActualizada);
    }

    // Eliminar una mesa
    @DeleteMapping("/mesas/{id}")
    public ResponseEntity<?> deleteMesa(@PathVariable Long id){
        mesaService.deleteMesa(id);
        return ResponseEntity.ok().build();
    }

    // Nuevo endpoint: Verificar mesas disponibles para una fecha, hora y número de personas
    @GetMapping("/mesas/disponibles")
    public ResponseEntity<List<Mesa>> getMesasDisponibles(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaReserva,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime horaReserva,
            @RequestParam int personas
    ){
        List<Mesa> mesasDisponibles = mesaService.getMesasDisponibles(fechaReserva, horaReserva, personas);
        return ResponseEntity.ok().body(mesasDisponibles);
    }
}
