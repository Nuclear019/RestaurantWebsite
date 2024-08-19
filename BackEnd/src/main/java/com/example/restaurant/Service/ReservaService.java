package com.example.restaurant.Service;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Entity.Reserva;
import com.example.restaurant.Repository.ReservaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }


    public List<Reserva> getReserva(){
        return reservaRepository.findAll();
    }

    public void addReserva(Reserva reserva){
        reservaRepository.save(reserva);
    }

    public Reserva listarReservaPorId(Long id) {
        return reservaRepository.findById(id).orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
    }


    public Reserva updateReserva(Long id, Reserva reserva){
        Reserva reservaActualizada = reservaRepository.findById(id).orElseThrow(()-> new RuntimeException("Reserva no encontrada"));
        reservaActualizada.setCorreoReserva(reserva.getCorreoReserva());
        reservaActualizada.setFechaReserva(reserva.getFechaReserva());
        reservaActualizada.setFechaCreacionReserva(reserva.getFechaCreacionReserva());
        reservaActualizada.setNombreReserva(reserva.getNombreReserva());
        reservaActualizada.setHoraReserva(reserva.getHoraReserva());
        reservaActualizada.setPersonasReserva(reserva.getPersonasReserva());

        reservaRepository.save(reservaActualizada);
        return reservaActualizada;
    }


    public ResponseEntity<Map<String, Boolean>> deleteReserva(Long id){
        Reserva reserva = reservaRepository.findById(id).orElseThrow(()-> new RuntimeException("Reserva no encontrada"));
        reservaRepository.delete(reserva);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok().body(response);

    }
}
