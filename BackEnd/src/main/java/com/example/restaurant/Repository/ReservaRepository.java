package com.example.restaurant.Repository;

import com.example.restaurant.Entity.Reserva;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    List<Reserva> findByFechaReservaAndHoraReserva(LocalDate fechaReserva, LocalTime horaReserva);

    Optional<List<Reserva>> findByFechaReserva(LocalDate fecha);
}
