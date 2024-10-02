export default function ArticulosCarta({ articuloCarta }) {
    return (
        <>
        <div className="menuProduct">
            <img
            className="productImg"
            src="https://via.placeholder.com/150x150"
            alt="Imagen de un plato"
            />
    
            <div className="productText">
            <h3>{articuloCarta.nombrePlato}</h3>
            <p>{articuloCarta.detallesPlato}</p>
            <p>{articuloCarta.precioPlato}€</p>
            </div>
        </div>
        </>
    );
    }