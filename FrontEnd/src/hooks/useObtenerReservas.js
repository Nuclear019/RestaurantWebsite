import { useState, useEffect } from "react";
import axios from "axios";

export const useObtenerReserva = (id) => {
  const [reserva, setReserva] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [errorReserva, setErrorReserva] = useState(null);

  useEffect(() => {
    const obtenerReserva = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:8080/api/v1/reservas/${id}`);
          setReserva(response.data);
        }
      } catch (error) {
        setErrorReserva("Error al obtener la reserva");
        console.error("Error al obtener la reserva:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerReserva();
  }, [id]);

  return { reserva, cargando, errorReserva };
};
