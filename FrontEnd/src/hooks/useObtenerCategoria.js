import { useState, useEffect } from "react";
import PlatosCategoriaService from "../services/PlatosCategoriaService";

export const useObtenerCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await PlatosCategoriaService.getAllCategorias();
        setCategorias(response.data);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchCategorias();
  }, []); // Arreglo de dependencias vacío para que solo se ejecute una vez

  return { categorias, setCategorias };
};
