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
  const [fecha, setFecha] = useState(new Date());

  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState(1);
  const [detalles, setDetalles] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(true);
  const [currentValue, setCurrentValue] = useState("14");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [mesasDisponibles, setMesasDisponibles] = useState([]); // Estado para almacenar mesas
  const [mesaAsignada, setMesaAsignada] = useState(null); // Estado para el ID de la mesa asignada
  var errorCreating = false;
  useEffect(() => {
    const obtenerMesas = async () => {
      try {
        const formattedDate = fecha.toISOString().split('T')[0]; // Formato yyyy-MM-dd
        const formattedTime = `${currentValue}:00`; // Formato HH:mm:ss
    
        const response = await axios.get(`http://localhost:8080/api/v1/mesas/disponibles`, {
          params: {
            fechaReserva: formattedDate,
            horaReserva: formattedTime,
            personas: personas,
          },
        });
    
        console.log("Datos recibidos del backend:", response.data);
        setMesasDisponibles(response.data); // Guardar las mesas disponibles
      } catch (error) {
        console.error("Error al obtener las mesas:", error);
      }
    };
    
    

    const obtenerReserva = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:8080/api/v1/reservas/${id}`
          );
          const reserva = response.data;
          setNombre(reserva.nombreReserva);
          setCorreo(reserva.correoReserva);
          setFecha(new Date(reserva.fechaReserva));
          setCurrentValue(reserva.horaReserva.slice(0, 5));
          setPersonas(reserva.personasReserva);
          setDetalles(reserva.detallesReserva || "");
        }
      } catch (error) {
        console.error("Error al obtener la reserva:", error);
        setMensaje("Hubo un problema al obtener la reserva");
        setModalIsOpen(true);
      } finally {
        setCargando(false);
      }
    };

    obtenerMesas();
    obtenerReserva();
  }, [id]);

  // Lógica para asignar una mesa basada en la cantidad de personas y la disponibilidad
  useEffect(() => {
    if (mesasDisponibles.length > 0 && fecha && currentValue) {
      console.log("Mesas Disponibles:", mesasDisponibles);
      console.log("Fecha:", fecha.toLocaleDateString('en-CA'));
      console.log("Hora:", currentValue + ":00");
  
      const mesaAdecuada = mesasDisponibles.find((mesa) => {
        const reservas = Array.isArray(mesa.reservas) ? mesa.reservas : [];
        const estaReservada = reservas.some(
          (reserva) =>
            reserva.fechaReserva === fecha.toLocaleDateString('en-CA') &&
            reserva.horaReserva === currentValue + ":00"
        );
  
        console.log(`Mesa ${mesa.idMesa}: Capacidad: ${mesa.capacidad}, Reservada: ${estaReservada}`);
  
        return mesa.capacidad >= personas && !estaReservada;
      });
  
      if (mesaAdecuada) {
        setMesaAsignada(mesaAdecuada); // Asignar el ID de la mesa
        setErrorMessage(""); // Limpiar el mensaje de error
      } else {
        setErrorMessage("No hay mesas disponibles para este horario");
      }
    }
  }, [mesasDisponibles, fecha, currentValue, personas]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!mesaAsignada) {
      setMensaje("No se puede crear la reserva, no hay mesas disponibles");
      errorCreating = true;
      setModalIsOpen(true);
      return;
    }
  
    const reserva = {
      nombreReserva: nombre,
      correoReserva: correo,
      fechaReserva: fecha.toLocaleDateString('en-CA'),
      horaReserva: currentValue + ":00",
      personasReserva: personas,
      fechaCreacionReserva: new Date().toISOString(),
      detallesReserva: detalles,
      mesa:  mesaAsignada , // Enviar el ID de la mesa
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
        setNombre("");
        setCorreo("");
        setFecha(null);
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
    if(errorCreating==false){
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
        {/* Form fields */}
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
            onValueChanged={(event) => {
              setCurrentValue(event.detail.value);
            }}
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
        </button>
      </Modal>
    </div>
  );
};

export default NuevaReserva;
