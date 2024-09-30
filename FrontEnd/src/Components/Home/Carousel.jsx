import "../../styles/carousel.css"; // Asegúrate de crear este archivo para el CSS
import CarouselItem from "./CarouselItem";
const Carousel = () => {
   
    return (
      <div class="carousel">
    <div class="carousel-track">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </div>
  </div>
    );
};


export default Carousel;
