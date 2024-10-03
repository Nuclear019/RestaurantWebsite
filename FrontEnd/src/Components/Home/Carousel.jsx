import "../../styles/carousel.css"; // Asegúrate de crear este archivo para el CSS
import CarouselItem from "./CarouselItem";
import { useObtenerArticulosMasVendido } from "../../hooks/useObtenerArticulosMasVendido";
import { useState, useEffect } from "react";

const Carousel = () => {
  const { articulosMejorValorados } = useObtenerArticulosMasVendido();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % articulosMejorValorados.length
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [articulosMejorValorados]);

  return (
    <>
      {articulosMejorValorados.length > 0 ? (
        <div className="carouselTitle italianno-regular">
          Lo mas destacado
          <div className="carousel">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${articulosMejorValorados.length * 100}%`
              }}
            >
              {articulosMejorValorados.map((articulo, index) => (
                <CarouselItem key={index} articulo={articulo} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No hay artículos destacados</p>
      )}
    </>
  );
};

export default Carousel;
