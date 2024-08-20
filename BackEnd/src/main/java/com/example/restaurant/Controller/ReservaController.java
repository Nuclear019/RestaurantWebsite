package com.example.restaurant.Controller;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Entity.Reserva;
import com.example.restaurant.MailSenderClass;
import com.example.restaurant.Service.MesaService;
import com.example.restaurant.Service.ReservaService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1")
@RestController
public class ReservaController {

    private ReservaService reservaService;
    private MailSenderClass mailSenderClass = new MailSenderClass();
    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }


    @GetMapping("/reservas")
    public List<Reserva> getReserva(){
        return reservaService.getReserva();
    }

    @PostMapping("/reservas")
    public void addReserva(@RequestBody Reserva reserva){
        mailSenderClass.sendEmail(reserva);
        reservaService.addReserva(reserva);
    }

    @GetMapping("/reservas/{id}")
    public ResponseEntity<Reserva> listarReservaPorId(@PathVariable Long id){
        Reserva reserva = reservaService.listarReservaPorId(id);
        return ResponseEntity.ok().body(reserva);
    }

    @PutMapping("/reservas/{id}")
    public ResponseEntity<Reserva> updateReserva(@PathVariable Long id, @RequestBody Reserva reserva){
        Reserva reservaActualizada = reservaService.updateReserva(id, reserva);
        return ResponseEntity.ok().body(reservaActualizada);
    }

    @DeleteMapping("/reservas/{id}")
    public ResponseEntity<?> deleteReserva(@PathVariable Long id){
        reservaService.deleteReserva(id);
        return ResponseEntity.ok().build();
    }
}
