import React from "react";
import "../../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
export default function Home() {
    const navigate = useNavigate();
    const handleClickReserva = () => {
      navigate("/nueva-reserva");
    };
    const handleClickCarta = () => {
      navigate("/menu");
    };
  return (
    <div className="">
      <div className="homeHeader">
        <h2>Restaurante </h2>
        <img
          src="https://via.placeholder.com/100x100"
          alt="Logo del restaurante"
        />
        <h2>Lorem Ipsum</h2>
      </div>

    
              <Carousel />

              <p>
        Bienvenido al restaurante Lorem Ipsum, un lugar donde podrás disfrutar
        de la mejor comida de la ciudad. Nuestro restaurante ofrece una amplia
        variedad de platos para todos los gustos, desde platos tradicionales
        hasta platos internacionales. ¡Ven a visitarnos y disfruta de una
        experiencia gastronómica única!
      </p>
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
