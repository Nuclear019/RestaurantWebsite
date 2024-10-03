import React, { useState } from "react";
import ListaArticulos from "./CartaSecciones/ListaArticulos";
import "../../styles/Menu.css";
import { useObtenerCategoria } from "../../hooks/useObtenerCategoria";
import Loading from "../Loading";

const Carta = () => {
  const { categorias } = useObtenerCategoria();
  const [activeTab, setActiveTab] = useState(null);

  // Añadimos un log para ver cuántas veces se renderiza este componente
  console.log("Renderizando Menu");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {categorias.length > 0 ? (
        <div className="menu">
          <h2>Carta del restaurante</h2>

          <div className="tabs">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                onClick={() => handleTabChange(categoria.idPlatoCategoria)}
                className={activeTab === categoria.idPlatoCategoria ? "active-tab" : ""}
              >
                {categoria.categoriaPlato}
              </div>
            ))}
          </div>

          <div className="tab-content">
            {activeTab !== null && (
              <ListaArticulos idCategoria={activeTab} />
            )}
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Carta;
