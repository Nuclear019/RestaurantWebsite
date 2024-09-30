import React from "react";
import MenuCarta from "./MenuCarta";
import '../../styles/Menu.css';
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const handleNuevoPlato = () => {
    navigate("/nuevo-plato");

    }


  return (
    <div className="container">
      <h2>Carta del restaurante</h2>

    <div className="actionMenu">
      <button onClick={handleNuevoPlato} className="btn btn-primary">Añadir plato a la carta</button>
    </div>
      <div className="menu">
        <MenuCarta />
        <MenuCarta />
       

      </div>

    </div>
  );
};

export default Menu;