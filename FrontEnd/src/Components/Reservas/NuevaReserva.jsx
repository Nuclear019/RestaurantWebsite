import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "../../styles/NuevaReserva.css";
import { TimePicker } from "@hilla/react-components/TimePicker.js";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { isBefore } from 'date-fns';
import Textarea from '@mui/joy/Textarea';


Modal.setAppElement("#root");

const NuevaReserva = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState(null); // Estado para la fecha
  const [hora, setHora] = useState(""); // Hora ya no se usa directamente
  const [personas, setPersonas] = useState(1);
  const [detalles, setDetalles] = useState(""); // Estado para los detalles de la reserva
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(true);
  const [currentValue, setCurrentValue] = useState(""); // Estado para el TimePicker
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error para TimePicker
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerReserva = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:8080/api/v1/reservas/${id}`
          );
          const reserva = response.data;
          setNombre(reserva.nombreReserva);
          setCorreo(reserva.correoReserva);
          setFecha(new Date(reserva.fechaReserva)); // Asegúrate de que sea un objeto Date
          setCurrentValue(reserva.horaReserva.slice(0, 5)); // Formatear la hora a 'HH:MM'
          setPersonas(reserva.personasReserva);
          setDetalles(reserva.detallesReserva || ""); // Establecer detalles si están disponibles
        }
      } catch (error) {
        console.error("Error al obtener la reserva:", error);
        setMensaje("Hubo un problema al obtener la reserva");
        setModalIsOpen(true);
      } finally {
        setCargando(false);
      }
    };

    obtenerReserva();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reserva = {
      nombreReserva: nombre,
      correoReserva: correo,
      fechaReserva: fecha.toLocaleDateString('en-CA'), // Extraer solo la fecha en formato YYYY-MM-DD
      horaReserva: currentValue + ":00",
      personasReserva: personas,
      fechaCreacionReserva: new Date().toISOString(),
      detallesReserva: detalles, // Incluir detalles en la reserva
    };

    try {
      let response;
      if (id) {
        response = await axios.put(
          `http://localhost:8080/api/v1/reservas/${id}`,
          reserva
        );
        setMensaje("Reserva actualizada exitosamente");
      } else {
        response = await axios.post(
          "http://localhost:8080/api/v1/reservas",
          reserva
        );
        setMensaje("Reserva creada exitosamente");
        // Limpiar los campos después de crear la reserva
        setNombre("");
        setCorreo("");
        setFecha(null);
        setCurrentValue("");
        setPersonas(1);
        setDetalles(""); // Limpiar detalles
      }

      if (response.status === 200) {
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error al procesar la reserva:", error);
      setMensaje("Hubo un problema al procesar la reserva");
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
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
              shouldDisableDate={(date) => isBefore(date, new Date().setHours(0, 0, 0, 0))}
            />
          </LocalizationProvider>
        </div>
        <div className="form-group">
          <TimePicker
            label="Hora"
            value={currentValue}
            min="14:00"
            max="22:30"
            step={60 * 30} // Intervalos de 30 minutos
            errorMessage={errorMessage}
            onValueChanged={(event) => {
              setCurrentValue(event.detail.value);
            }}
            onChange={(event) => {
              const { min, max, value } = event.target;
              if (value < min) {
                setErrorMessage("Too early, choose another time");
              } else if (value > max) {
                setErrorMessage("Too late, choose another time");
              } else {
                setErrorMessage("");
              }
            }}
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
            lang="es"
          />
        </div>
        <Textarea minRows={2} onChange={(e) => setDetalles(e.target.value)} />
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
