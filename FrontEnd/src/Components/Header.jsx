import React from "react";
import "../styles/Header.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import ListarReservas from "./Reservas/ListaReservas";
import NuevaReserva from "./Reservas/NuevaReserva";
import Personal from "./Personal";
import Carta from "./Carta/Carta";
import Reserva from "./Reservas/Reserva";
import MenuCartaDetalles from "./Carta/MenuCartaDetalles";
import NuevoPlato from "./Carta/NuevoPlato";
import NotFound from "./Componentes Personalizados/NotFound";

export default function Header() {
  function handleBackHome() {
    window.location.href = "/";
  }
  return (
    <>
      <div onClick={handleBackHome} className="homeHeader">
        <h2>Restaurante </h2>
        <img
          src="https://via.placeholder.com/100x100"
          alt="Logo del restaurante"
        />
        <h2>Lorem Ipsum</h2>
      </div>
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<ListarReservas />} />
            <Route path="/nueva-reserva" element={<NuevaReserva />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/menu" element={<Carta />} />
            <Route path="/modificar-reserva/:id" element={<NuevaReserva />} />
            <Route path="/reserva/:id" element={<Reserva />} />
            <Route path="/menuDetalles/:id" element={<MenuCartaDetalles />} />
            <Route path="/nuevo-plato" element={<NuevoPlato />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <footer className="footer">
      <h3>Restaurante Lorem Ipsum</h3>

<p> Horario: Lunes a Domingo de 12:00 a 23:30</p>
        <div className="footerContainer">

          <div className="footerLocalizacion">
            <p> Dirección: Calle Lorem Ipsum, 123, Madrid</p>
          </div>
          <div className="footerContact">
            <p> Teléfono: 123 456 789</p>
            <p> Email: jhondoe@gmail.com</p>
          </div>
          <div className="footerSocial">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Logo de Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://via.placeholder.com/50x50"
                alt="Logo de Instagram"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Logo de Twitter"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
