import { useState, useEffect } from 'react';
import ReservaService from '../services/ReservaService';

export function useSelectAllReservas() {
    const [reservas, setReservas] = useState([]);

    const fetchReservas = () => {
        ReservaService.getAllReservas()
            .then((response) => {
                setReservas(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchReservas(); // Fetch the reservas initially
    }, []);

    return { reservas, fetchReservas };
}
