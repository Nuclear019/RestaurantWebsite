import { useState, useEffect } from "react";
import PlatosService from "../services/PlatosService";

export function useObtenerArticulosMasVendido() {
  const [articulosMejorValorados, setArticulosMejorValorados] = useState([]);

  useEffect(() => {
    const obtenerArticulosMasVendido = async () => {
      try {
        const response = await PlatosService.getPlatosMasVendido();
        setArticulosMejorValorados(response.data);
      } catch (error) {
        console.log("Error al obtener los artículos mejor valorados:", error);
      }
    };

    obtenerArticulosMasVendido();
  }, []); // El array de dependencias está vacío para que solo se ejecute una vez

  return { articulosMejorValorados };
}
