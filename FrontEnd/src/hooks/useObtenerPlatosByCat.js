import { useState, useEffect } from "react";
import PlatosService from "../services/PlatosService";

export const useObtenerPlatosByCat = (categoria) => {
  const [articulosCarta, setArticulosCarta] = useState([]);

  useEffect(() => {
    if (categoria) {  // Asegurarse de que `categoria` esté definida antes de hacer la solicitud
      PlatosService.getPlatoByCategoria(categoria)
        .then((response) => {
          console.log(response.data);
          setArticulosCarta(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoria]);  // Escuchar los cambios en `categoria`

  return { articulosCarta, setArticulosCarta };
};
