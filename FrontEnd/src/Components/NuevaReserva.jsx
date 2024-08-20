import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Importamos la librería de modal
import { useNavigate } from 'react-router-dom';
import "../styles/NuevaReserva.css"; // Importamos el archivo CSS para los estilos
// Configuración para accesibilidad
Modal.setAppElement('#root');

const NuevaReserva = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado del modal
  const [mensaje, setMensaje] = useState(''); // Mensaje de éxito o error
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nuevaReserva = {
      nombreReserva: nombre,
      correoReserva: correo,
      fechaReserva: fecha,
      horaReserva: hora + ':00', // Asegurarse de enviar con segundos
      personasReserva: personas,
      fechaCreacionReserva: new Date().toISOString(),
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/reservas', nuevaReserva);
      if (response.status === 200) {
        setMensaje('Reserva creada exitosamente');
        setModalIsOpen(true); // Abrir el modal
        setNombre('');
        setCorreo('');
        setFecha('');
        setHora('');
        setPersonas(1);
      }
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      setMensaje('Hubo un problema al crear la reserva');
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/reservas');
    setMensaje('');
  };

  return (
    <div className="container">
      <h2 className="title">Nueva Reserva</h2>
      <form onSubmit={handleSubmit} className="form-reserva">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="personas">Número de Personas</label>
          <input
            type="number"
            id="personas"
            name="personas"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
            min="1"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Reservar
        </button>
      </form>

      {/* Modal de notificación */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notificación de Reserva"
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
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <h2 className="modal-title">{mensaje}</h2>
        <button onClick={closeModal} className="btn btn-close">
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default NuevaReserva;
