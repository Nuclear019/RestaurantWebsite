import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservaService from '../services/ReservaService';
import Modal from 'react-modal';
import axios from 'axios';
import editarImg from '../assets/editar.png';
import eliminarImg from '../assets/eliminar.png';

const ProximasReservas = () => {
    const [reservas, setReservas] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedReserva, setSelectedReserva] = useState(null);
    const navigate = useNavigate();
    const currentDate = new Date();

    // Format the date to YYYY-MM-DD (or as required)
    const formattedDate = currentDate.toISOString().split('T')[0];  // "YYYY-MM-DD"
    
    useEffect(() => {
    ReservaService.getReservaByDate(formattedDate).then((response) => {
        setReservas(response.data);
    }).catch((error) => {
        console.log(error);
    });
  }
  , []);
  
    const openModal = (reserva) => {
      setSelectedReserva(reserva);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedReserva(null);
      setModalIsOpen(false);
    };
  
    const handleEliminar = async () => {
      if (!selectedReserva) return;
  
      try {
        await axios.delete(`http://localhost:8080/api/v1/reservas/${selectedReserva.idReserva}`);
        setReservas(reservas.filter((reserva) => reserva.idReserva !== selectedReserva.idReserva));
        closeModal(); // Cierra el modal después de eliminar
      } catch (error) {
        console.error('Error al eliminar la reserva:', error);
      }
    };
  
    const handleModificar = (idReserva) => {
      navigate(`/modificar-reserva/${idReserva}`);
    };
  
    return (
      <div className="container">
        <h2 className="title">Reservas para hoy</h2>
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
                <tr key={reserva.idReserva}>
                  <td>{reserva.nombreReserva}</td>
                  <td>{new Date(reserva.fechaReserva).toLocaleDateString()}</td>
                  <td>{reserva.horaReserva}</td>
                  <td>{reserva.personasReserva}</td>
                  <td>
                    <button
                      onClick={() => handleModificar(reserva.idReserva)}
                      className="btn"
                      
                    >
                      <img 
                        src={editarImg} 
                        alt="Editar Reserva"  
                        className="btn-class"
                      /> 
                      
                    </button>
                    <button
                      onClick={() => openModal(reserva)} // Abre el modal de seguridad
                      className="btn btn-delete"
                    >
                      <img src={eliminarImg} alt="" 
                      className="btn-class" />
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Confirmación de Eliminación"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px',
              textAlign: 'center',
            },
          }}
        >
          <h2>¿Estás seguro de que quieres eliminar esta reserva?</h2>
          <p>
            <strong>Cliente:</strong> {selectedReserva?.nombreReserva} <br />
            <strong>Fecha:</strong> {selectedReserva ? new Date(selectedReserva.fechaReserva).toLocaleDateString() : ''} <br />
            <strong>Hora:</strong> {selectedReserva?.horaReserva} <br />
            <strong>Número de Personas:</strong> {selectedReserva?.personasReserva}
          </p>
          <div>
            <button onClick={handleEliminar} className="btn btn-danger">
              Sí, eliminar
            </button>
            <button onClick={closeModal} className="btn btn-cancel btn-secondary">
              Cancelar
            </button>
          </div>
        </Modal>
      </div>
    );
};

export default ProximasReservas;