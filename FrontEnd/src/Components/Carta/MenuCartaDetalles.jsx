import React from "react";
import fotoMenuDefault from "../../assets/fotoMenuDefault.webp";

export default function MenuCartaDetalles() {
  return (
    <>
    
     <div className="container">
      <div className="detailsMenu">
        <div className="detailsMenu-col">
          <img className="" src={fotoMenuDefault} alt="Title" />
        </div>
        <div className="detailsMenu-col">
          <table className="tableMenuDetails">
            <thead className="bg-light">
              <th>Nombre del plato</th>
            </thead>
            <tbody>
              <tr className="tableTextDetails">
                <td>Detalles del plato</td>
              </tr>
              <tr className="menuPrice">
                <td>Precio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
   
  );
}
