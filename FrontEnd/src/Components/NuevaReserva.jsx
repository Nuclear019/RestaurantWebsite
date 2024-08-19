import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Importamos la librería de modal

// Configuración para accesibilidad
Modal.setAppElement('#root');

const NuevaReserva = () => {
  // Estados para controlar los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado del modal
  const [mensaje, setMensaje] = useState(''); // Mensaje de éxito o error

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Crear el objeto con los datos de la nueva reserva
    const nuevaReserva = {
      nombreReserva: nombre,
      correoReserva: correo,
      fechaReserva: fecha,
      horaReserva: hora + ':00', // Asegurarse de enviar con segundos
      personasReserva: personas,
      fechaCreacionReserva: new Date().toISOString(), // Fecha actual en formato ISO
    };

    try {
      // Enviar la solicitud POST a la API
      const response = await axios.post('http://localhost:3000/api/v1/reservas', nuevaReserva);

      // Si la reserva se creó con éxito, mostramos un modal de éxito
      if (response.status === 201) {
        setMensaje('Reserva creada exitosamente');
        setModalIsOpen(true); // Abrir el modal
        // Limpiar el formulario
        setNombre('');
        setCorreo('');
        setFecha('');
        setHora('');
        setPersonas(1);
      }
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      setMensaje('Hubo un problema al crear la reserva');
      setModalIsOpen(true); // Abrir el modal también en caso de error
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
    setMensaje('');
  };

  return (
    <div>
      <h2>Nueva Reserva</h2>
      {/* Formulario para nueva reserva */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />

        <label htmlFor="personas">Número de Personas</label>
        <input
          type="number"
          id="personas"
          name="personas"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          min="1"
          required
        />

        <button type="submit">Reservar</button>
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
          },
        }}
      >
        <h2>{mensaje}</h2>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default NuevaReserva;
