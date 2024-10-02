import React from "react";
import ListaArticulos from "./CartaSecciones/ListaArticulos";
import "../../styles/Menu.css";
import { useObtenerCategoria } from "../../hooks/useObtenerCategoria";
import { useState } from "react";


const Menu = () => {
  const {categoria , setCategorias} = useObtenerCategoria();
 
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (<>
  {categoria.length > 0 ? (

<div className="menu">
<h2>Carta del restaurante</h2>

<div className="tabs">
  <div 
    onClick={() => handleTabChange(categoria[0].categoria)} 
    className={activeTab === categoria[0].categoria ? 'active-tab' : ''}
  >
    Entrantes
  </div>
  <div 
    onClick={() => handleTabChange(categoria[1].categoria)} 
    className={activeTab === categoria[1].categoria ? 'active-tab' : ''}
  >
    Principales
  </div>
  <div 
    onClick={() => handleTabChange(categoria[2].categoria)} 
    className={activeTab === categoria[2].categoria ? 'active-tab' : ''}
  >
    Postres
  </div>
  <div 
    onClick={() => handleTabChange(categoria[3].categoria)} 
    className={activeTab === categoria[3].categoria ? 'active-tab' : ''}
  >
    Bebidas
  </div>
</div>
<div className="tab-content">
  {activeTab === categoria[0].id &&  <ListaArticulos categoria={1} />}
  {activeTab === categoria[1].categoria && <ListaArticulos categoria={2} />}
  {activeTab === categoria[2].categoria && <ListaArticulos categoria={3} />}
  {activeTab === categoria[3].categoria && <ListaArticulos categoria={4} />}

  

</div>
</div>

  ):(

      <div>
          <Loading />
      </div>

  )}

  </>
    
   
  );
};

export default Menu;
