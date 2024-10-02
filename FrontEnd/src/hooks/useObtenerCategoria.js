import { useState, useEffect } from "react";
import PlatosCategoriaService from "../services/PlatosCategoriaService";

export const useObtenerCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    PlatosCategoriaService.getAllCategorias()
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return { categorias , setCategorias };
};
