import React from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();

    function handleBackHome() {
        return () => {
            navigate("/");
        };
    }

  return (
    <div className="container text-center">
        <h2 className="text-danger">Error 404 Not Found</h2>
      <h3>Lo siento, no encontramos la página que está buscando.</h3>
      <button className="btn btn-primary" onClick={handleBackHome()}>Volver al inicio</button>
    </div>
  );
}