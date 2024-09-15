import React, { useState } from "react";
import Modal from "react-modal";
import Reserva from "./Reserva";
import "../../styles/ListaReservas.css";
import "bootstrap/dist/css/bootstrap.css";
import { Calendar } from "rsuite";
import "../../styles/calendar.css";
import { useSelectDateReservas } from "../../hooks/useSelectReservas";
import ReservaService from "../../services/ReservaService";
import 'rsuite/dist/rsuite.css'; // Importa el CSS de rsuite
import { Badge } from "rsuite";

Modal.setAppElement("#root");

const ListaReservas = () => {
  const { reservas, setReservas } = useSelectDateReservas(new Date());
  var [actualDay, setActualDay] = useState(new Date().toISOString().split('T')[0]);
  


  function handleDateSelect(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son 0-indexados
    const day = String(date.getDate()).padStart(2, "0");

    // Formatear la fecha en "YYYY-MM-DD"
    const formattedDate = `${year}-${month}-${day}`;
    ReservaService.getReservaByDate(formattedDate).then((response) => {
      setReservas(response.data);
  }).catch((error) => {
      console.log(error);
  });
  setActualDay(formattedDate);
  console.log(reservas);
  if(reservas.length){
    return <Badge className="calendar-todo-item-badge" />;
  }
  
    
  } 


  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  return (
    <>
    

      <div className="container">
      <div style={{ width: 500 }}>
        <Calendar compact bordered onSelect={handleDateSelect} />
      </div>
      <h2 className="title">Reservas {formatDate(actualDay)}</h2>
      {reservas.length === 0 ? (
        <p className="no-reservations">No hay reservas disponibles.</p>
      ) : (
        <table className="reservas-table">
          <thead>
            <tr>
              <th>Cliente</th>
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
                fetchReservas={setReservas} // Pasa la función para actualizar las reservas
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default ListaReservas;

/**
 * 
 *  
 * 
 */
