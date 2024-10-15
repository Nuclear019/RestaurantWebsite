import { useState, useEffect } from "react";

const CarouselItem = ({ articulo }) => {
  const [fotoArticulo, setFotoArticulo] = useState("");

  useEffect(() => {
    if (articulo.imagenPlato) {
      setFotoArticulo(`data:image/jpeg;base64,${articulo.imagenPlato}`); // Ajusta el tipo de imagen si es necesario
    } else {
      setFotoArticulo("https://via.placeholder.com/150x150");
    }
  }, [articulo]);

  return (
    <div className="carouselItem">
      <img src={fotoArticulo} className="carouselImg" alt="Imagen de un plato" />
      <h3>{articulo.nombrePlato}</h3>
    </div>
  );
};

export default CarouselItem;
