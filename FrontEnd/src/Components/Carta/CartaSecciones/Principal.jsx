export default function Principal({ platoPrincipal }) {
    return (
        <>
        <div className="menuProduct">
            <img
            className="productImg"
            src="https://via.placeholder.com/150x150"
            alt="Imagen de un plato"
            />
    
            <div className="productText">
            <h3>{platoPrincipal.nombrePlato}</h3>
            <p>{platoPrincipal.detallesPlato}</p>
            <p>{platoPrincipal.precioPlato}€</p>
            </div>
        </div>
        </>
    );
    }