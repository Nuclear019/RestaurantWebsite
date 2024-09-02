import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import editarImg from '../../assets/editar.png';
import eliminarImg from '../../assets/eliminar.png';
export default function Reserva({ reserva, onReservaEliminada }) {
    const fechaReserva = new Date(reserva.fechaReserva).toLocaleDateString();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleEliminar = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/reservas/${reserva.idReserva}`);
            onReservaEliminada(reserva.idReserva); // Llama a la función para actualizar la lista
            setModalIsOpen(false); // Cierra el modal después de eliminar
        } catch (error) {
            console.error("Error al eliminar la reserva:", error);
        }
    };

    const handleModificar = (idReserva) => {
        navigate(`/modificar-reserva/${idReserva}`);
    };

    return (
        <>
            <tr key={reserva.idReserva}>
                <td>{reserva.nombreReserva}</td>
                <td>{fechaReserva}</td>
                <td>{reserva.horaReserva}</td>
                <td>{reserva.personasReserva}</td>
                <td>
                    <button onClick={() => handleModificar(reserva.idReserva)} className="btn">
                        <img src={editarImg} alt="Editar Reserva" className="btn-class" />
                    </button>
                    <button onClick={() => setModalIsOpen(true)} className="btn btn-delete">
                        <img src={eliminarImg} alt="" className="btn-class" />
                    </button>
                </td>
            </tr>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Confirmación de Eliminación"
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
                    },
                }}
            >
                <h2>¿Estás seguro de que quieres eliminar esta reserva?</h2>
                <p>
                    <strong>Cliente:</strong> {reserva.nombreReserva} <br />
                    <strong>Fecha:</strong> {fechaReserva} <br />
                    <strong>Hora:</strong> {reserva.horaReserva} <br />
                    <strong>Número de Personas:</strong> {reserva.personasReserva}
                </p>
                <div>
                    <button onClick={handleEliminar} className="btn btn-danger">
                        Sí, eliminar
                    </button>
                    <button onClick={() => setModalIsOpen(false)} className="btn btn-cancel btn-secondary">
                        Cancelar
                    </button>
                </div>
            </Modal>
        </>
    );
}
