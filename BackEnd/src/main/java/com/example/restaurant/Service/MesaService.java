package com.example.restaurant.Service;

import com.example.restaurant.Entity.Mesa;
import com.example.restaurant.Entity.Reserva;
import com.example.restaurant.Repository.MesaRepository;
import com.example.restaurant.Repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MesaService {

    @Autowired
    private MesaRepository mesaRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    // Obtener todas las mesas
    public List<Mesa> getMesas() {
        return mesaRepository.findAll();
    }

    // Añadir una mesa nueva
    public void addMesa(Mesa mesa) {
        mesaRepository.save(mesa);
    }

    // Obtener una mesa por ID
    public Mesa listarMesaPorId(Long id) {
        return mesaRepository.findById(id).orElse(null);
    }

    // Actualizar una mesa
    public Mesa updateMesa(Long id, Mesa mesa) {
        Mesa mesaExistente = listarMesaPorId(id);
        if (mesaExistente != null) {
            mesaExistente.setCapacidad(mesa.getCapacidad());
            return mesaRepository.save(mesaExistente);
        }
        return null;
    }

    // Eliminar una mesa
    public void deleteMesa(Long id) {
        mesaRepository.deleteById(id);
    }

    // Método para obtener las mesas disponibles en una fecha y hora específicas
    public List<Mesa> getMesasDisponibles(LocalDate fechaReserva, LocalTime horaReserva, int personas) {
        // Obtener todas las mesas con capacidad suficiente
        List<Mesa> mesasAdecuadas = mesaRepository.findAll()
                .stream()
                .filter(m -> m.getCapacidad() >= personas)
                .collect(Collectors.toList());

        // Filtrar mesas que no estén reservadas en la fecha y hora indicadas
        List<Mesa> mesasOcupadas = reservaRepository.findByFechaReservaAndHoraReserva(fechaReserva, horaReserva)
                .stream()
                .map(Reserva::getMesa)
                .collect(Collectors.toList());

        // Devolver las mesas que no están ocupadas
        return mesasAdecuadas.stream()
                .filter(mesa -> !mesasOcupadas.contains(mesa.getIdMesa()))
                .collect(Collectors.toList());
    }
}
