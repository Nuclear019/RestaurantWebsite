import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import { TimePicker } from "@hilla/react-components/TimePicker.js";
import { isBefore } from 'date-fns';
import { useObtenerMesas } from "../../hooks/useObtenerMesas"; // Importa los hooks personalizados
import { useMesaAsignada } from "../../hooks/useMesaAsignada"; // Importa los hooks personalizados
import { useObtenerReserva } from "../../hooks/useObtenerReservas"; // Importa los hooks personalizados
import "../../styles/NuevaReserva.css";
Modal.setAppElement("#root");

const NuevaReserva = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [personas, setPersonas] = useState(1);
  const [detalles, setDetalles] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [currentValue, setCurrentValue] = useState("14");

  const { mesasDisponibles, errorMesas } = useObtenerMesas(fecha, currentValue, personas);
  const { reserva, cargando, errorReserva } = useObtenerReserva(id);
  const { mesaAsignada, errorMessage } = useMesaAsignada(mesasDisponibles, fecha, currentValue, personas);

  // Asignación de datos de la reserva obtenida
  React.useEffect(() => {
    if (reserva) {
      setNombre(reserva.nombreReserva);
      setCorreo(reserva.correoReserva);
      setFecha(new Date(reserva.fechaReserva));
      setCurrentValue(reserva.horaReserva.slice(0, 5));
      setPersonas(reserva.personasReserva);
      setDetalles(reserva.detallesReserva || "");
    }
  }, [reserva]);

  const handleTimeChange = (event) => {
    const value = event.detail.value;
    setCurrentValue(value); // Actualiza el estado de la hora seleccionada
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!mesaAsignada) {
      setMensaje("No se puede crear la reserva, no hay mesas disponibles");
      setModalIsOpen(true);
      return;
    }
  
    const reserva = {
      nombreReserva: nombre,
      correoReserva: correo,
      fechaReserva: fecha.toLocaleDateString('en-CA'),
      horaReserva: `${currentValue}:00`,
      personasReserva: personas,
      fechaCreacionReserva: new Date().toISOString(),
      detallesReserva: detalles,
      mesa: mesaAsignada,
    };
  
    try {
      let response;
      if (id) {
        response = await axios.put(`http://localhost:8080/api/v1/reservas/${id}`, reserva);
        setMensaje("Reserva actualizada exitosamente");
      } else {
        response = await axios.post("http://localhost:8080/api/v1/reservas", reserva);
        setMensaje("Reserva creada exitosamente");
        setNombre("");
        setCorreo("");
        setFecha(new Date());
        setCurrentValue("");
        setPersonas(1);
        setDetalles("");
      }
  
      if (response.status === 200 || response.status === 201) {
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error al procesar la reserva:", error);
      setMensaje("Hubo un problema al procesar la reserva");
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    if (mensaje.includes("exitosamente")) {
      navigate("/");
    }
    setModalIsOpen(false);
    setMensaje("");
  };

  if (cargando) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="container">
      <h2 className="title">{id ? "Modificar Reserva" : "Nueva Reserva"}</h2>
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={fecha}
              onChange={(newValue) => setFecha(newValue)}
              renderInput={(params) => <TextField {...params} />}
              shouldDisableDate={(date) =>
                isBefore(date, new Date().setHours(0, 0, 0, 0))
              }
            />
          </LocalizationProvider>
        </div>
        <div className="form-group">
          <TimePicker
            label="Hora"
            value={currentValue}
            min="14:00"
            max="22:30"
            step={60 * 30}
            errorMessage={errorMessage}
            onValueChanged={handleTimeChange}
            onChange={(event) => {
              const { min, max, value } = event.target;
              if (value < min) {
                setErrorMessage("Hora muy temprano");
              } else if (value > max) {
                setErrorMessage("Hora muy tarde");
              } else {
                setErrorMessage("");
              }
            }}
          />
        </div>
        <div>
          <p>Quedan {mesasDisponibles.length} mesas disponibles para esta hora</p>
          {errorMesas && <p className="error">{errorMesas}</p>}
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
            lang="es"
          />
        </div>
        <Textarea
          minRows={2}
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        />
        <button type="submit" className="btn btn-submit">
          {id ? "Actualizar" : "Reservar"}
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notificación de Reserva"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
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
