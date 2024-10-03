export default function CarouselItem({articulo}) {
  return (
    <div className="carouselItem">
      <img src="https://via.placeholder.com/150x150" alt="Imagen de un plato" />
      <h3>{articulo.nombrePlato}</h3>
    </div>
  );
}
