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
          Lo más destacado
          <div className="carousel">
            <div
              className="carousel-track"
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentSlide * 100}%)`,
                width: '100%',
              }}
            >
              {articulosMejorValorados.map((articulo, index) => (
                <div 
                  key={index} 
                  style={{ width: '100%', flexShrink: 0 }} // Asegúrate de que cada elemento ocupe el 100%
                >
                  <CarouselItem articulo={articulo} />
                </div>
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
