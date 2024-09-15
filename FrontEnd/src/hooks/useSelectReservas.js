import { useState, useEffect } from 'react';
import ReservaService from '../services/ReservaService';

export function useSelectDateReservas(date) {
    const [reservas, setReservas] = useState([]);
    const formattedDate = date.toISOString().split('T')[0];  // "YYYY-MM-DD"
    useEffect(() => {
      ReservaService.getReservaByDate(formattedDate).then((response) => {
          setReservas(response.data);
      }).catch((error) => {
          console.log(error);
      });
      console.log("Use effect");
      
      }
    , [])
    console.log(reservas);
    
        return { reservas, setReservas };
  };