import React from "react";
import Modal from "react-modal";
import { useSelectAllReservas } from "../../hooks/useSelectAllReservas";
import Reserva from "./Reserva";
import "../../styles/ListaReservas.css";
import "bootstrap/dist/css/bootstrap.css";

Modal.setAppElement("#root");

const ListaReservas = () => {
  const { reservas, fetchReservas } = useSelectAllReservas(); // Usa el hook

  return (
    <div className="container">
      <h2 className="title">Reservas actuales</h2>
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <Reserva
                key={reserva.idReserva}
                reserva={reserva}
                fetchReservas={fetchReservas} // Pasa la función para actualizar las reservas
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaReservas;
