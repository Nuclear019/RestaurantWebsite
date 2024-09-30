import React from "react";
import { useNavigate } from "react-router-dom";
import fotoMenuDefault from '../../assets/fotoMenuDefault.webp';


export default function MenuCarta() {
    const navigate = useNavigate();

    function nav() {
        navigate("/menuDetalles");
    }

  return (
    <div onClick={nav} className="card menuItem">
        <img className="card-img-top imageMenu" src={fotoMenuDefault} alt="Title" />
        <div className="card-body">
            <h4 className="card-title">Nombre Plato</h4>
        </div>
    </div>
    
  );
}