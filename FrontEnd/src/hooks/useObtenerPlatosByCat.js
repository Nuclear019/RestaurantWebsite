import { useState, useEffect } from "react";
import PlatosService from "../services/PlatosService";

export const useObtenerPlatosByCat = (categoria) => {
  const [articulosCarta, setArticulosCarta] = useState([]);

  
  useEffect(() => {
    PlatosService.getPlatoByCategoria(categoria)
      .then((response) => {
        console.log(response.data);
        setArticulosCarta(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return { articulosCarta, setArticulosCarta };
};
