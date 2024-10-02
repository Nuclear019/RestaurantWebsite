import { useState, useEffect } from "react";
import axios from "axios";

export const useObtenerMesas = (fecha, currentValue, personas) => {
  const [mesasDisponibles, setMesasDisponibles] = useState([]);
  const [errorMesas, setErrorMesas] = useState(null);

  useEffect(() => {
    const obtenerMesas = async () => {
      try {
        const formattedDate = fecha.toISOString().split('T')[0];
        const formattedTime = `${currentValue}`;

        const response = await axios.get(`http://localhost:8080/api/v1/mesas/disponibles`, {
          params: {
            fechaReserva: formattedDate,
            horaReserva: formattedTime,
            personas: personas,
          }
          
        });

        setMesasDisponibles(response.data);
      } catch (error) {
        setErrorMesas("Error al obtener las mesas");
        console.error("Error al obtener las mesas:", error);
      }
    };

    obtenerMesas();
  }, [fecha, currentValue, personas]);

  return { mesasDisponibles, errorMesas };
};
