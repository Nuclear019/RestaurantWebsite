import React from "react";
import { useObtenerPlatosByCat } from "../../../hooks/useObtenerPlatosByCat";
import ArticuloCarta from "./ArticuloCarta";

export default function ListaArticulos({idCategoria}) {

  const {articulosCarta, setArticulosCarta} = useObtenerPlatosByCat(idCategoria);

   
  return (
    <>
      <h2>Platos principales</h2>
    {
      articulosCarta.length > 0 ? (

        articulosCarta.map((articulo) => (
          <ArticuloCarta articuloCarta={articulo} />))

      ) : (

        <h3>No hay platos</h3>
      )

        
    }
    
    </>
   
  );
}
