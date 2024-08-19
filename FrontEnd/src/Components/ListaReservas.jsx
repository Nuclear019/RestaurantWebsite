import { useEffect } from "react";
import { useState } from "react";
import ReservaService from "../services/ReservaService";
import "../styles/ListaReservas.css";


 const ListaReservas = () => {

    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        ReservaService.getAllReservas().then((response) => {
            setReservas(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    , []);

return (
    <div className="container">
      <h2 className="title">Reservas del Restaurante</h2>
      {reservas.length === 0 ? (
        <p className="no-reservations">No hay reservas disponibles.</p>
      ) : (
        <table className="reservas-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Número de Personas</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.idReserva}>
                <td>{reserva.nombreReserva}</td>
                <td>{new Date(reserva.fechaReserva).toLocaleDateString()}</td>
                <td>{reserva.horaReserva}</td>
                <td>{reserva.personasReserva}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaReservas;