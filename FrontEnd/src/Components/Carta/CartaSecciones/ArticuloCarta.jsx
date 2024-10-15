import { useState,useEffect } from "react";


export default function ArticulosCarta({ articuloCarta }) {
    const [fotoArticulo, setFotoArticulo] = useState("");

    useEffect(() => {
      if (articuloCarta.imagenPlato) {
        setFotoArticulo(`data:image/jpeg;base64,${articuloCarta.imagenPlato}`); // Ajusta el tipo de imagen si es necesario
      } else {
        setFotoArticulo("https://via.placeholder.com/150x150");
      }
    }, [articuloCarta]);

    return (
        <>
        <div className="menuProduct">
            <img
            className="productImg"
            src={fotoArticulo}
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