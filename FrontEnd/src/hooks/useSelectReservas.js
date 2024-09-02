import { useState, useEffect } from 'react';
import ReservaService from '../services/ReservaService';

export function useSelectReserva() {
    const [reservas, setReservas] = useState([]);
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];  // "YYYY-MM-DD"
    useEffect(() => {
      ReservaService.getReservaByDate(formattedDate).then((response) => {
          setReservas(response.data);
      }).catch((error) => {
          console.log(error);
      });
      }
    , [])
    console.log(reservas);
    
        return reservas;
  };