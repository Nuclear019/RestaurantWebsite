import { useState, useEffect } from "react";

export const useMesaAsignada = (mesasDisponibles, fecha, currentValue, personas) => {
  const [mesaAsignada, setMesaAsignada] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (mesasDisponibles.length > 0 && fecha && currentValue) {
      const mesaAdecuada = mesasDisponibles.find((mesa) => {
        const reservas = Array.isArray(mesa.reservas) ? mesa.reservas : [];
        const estaReservada = reservas.some(
          (reserva) =>
            reserva.fechaReserva === fecha.toLocaleDateString('en-CA') &&
            reserva.horaReserva === `${currentValue}:00`
        );

        return mesa.capacidad >= personas && !estaReservada;
      });

      if (mesaAdecuada) {
        setMesaAsignada(mesaAdecuada);
        setErrorMessage("");
      } else {
        setErrorMessage("No hay mesas disponibles para este horario");
      }
    }
  }, [mesasDisponibles, fecha, currentValue, personas]);

  return { mesaAsignada, errorMessage };
};
