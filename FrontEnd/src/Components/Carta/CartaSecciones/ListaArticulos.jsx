import React from "react";
import { useObtenerPlatosByCat } from "../../../hooks/useObtenerPlatosByCat";
import ArticuloCarta from "./ArticuloCarta";

export default function ListaArticulos({idCategoria}) {

  const {articulosCarta, setArticulosCarta} = useObtenerPlatosByCat(idCategoria);

  
   
  return (
    <>
    {
      articulosCarta.length > 0 ? (

        articulosCarta.map((articulo) => (
          <ArticuloCarta articuloCarta={articulo} />))

      ) : (

        <h3>Parece que todavía no hay nada aquí.</h3>
      )

        
    }
    
    </>
   
  );
}
