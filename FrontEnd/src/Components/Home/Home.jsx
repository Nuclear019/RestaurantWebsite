import React from "react";
import "../../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
1
export default function Home() {
  const navigate = useNavigate();
  const handleClickReserva = () => {
    navigate("/nueva-reserva");
    window.scrollTo(0, 0); // Desplaza la vista hacia arriba

  };
  const handleClickCarta = () => {
    navigate("/menu");
    window.scrollTo(0, 0); // Desplaza la vista hacia arriba

  };
  return (
    <div className="homeContainer">
     

      <div className="carouselDiv">
        
        <Carousel />
      </div>
      <div className="quieneSomosDiv">
        <h2>Quiénes somos?</h2>
        <div className="quieneSomosText">
          Restaurante Lorem Ipsum es un restaurante de comida internacional
          ubicado en la ciudad de Madrid. Ofrecemos una amplia variedad de
          platos de diferentes partes del mundo, desde la comida más tradicional
          hasta la más exótica. Nuestro objetivo es ofrecer a nuestros clientes
          una experiencia gastronómica única y de calidad. Ven a visitarnos y
          disfruta de una comida deliciosa en un ambiente acogedor y agradable.
        </div>
      </div>
      <div className="actionButtons">
        <div className="buttonNavigate" onClick={handleClickReserva}>
          <img
            src="https://via.placeholder.com/150x150"
            alt="Imagen de una mesa"
          />
          <h3>Reserva tu mesa</h3>
        </div>
        <div className="buttonNavigate" onClick={handleClickCarta}>
          <img
            src="https://via.placeholder.com/150x150"
            alt="Imagen de una mesa"
          />
          <h3>Consulta nuestra carta</h3>
        </div>
      </div>

     
    </div>
  );
}
