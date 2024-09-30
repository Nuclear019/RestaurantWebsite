import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function NuevoPlato() {
    return (
        <div className="nuevoPlato">
        <h2>Crear nuevo plato</h2>
        <form>
            <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion"></textarea>
            </div>
            <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input type="number" id="precio" name="precio" />
            </div>
            <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input type="file" id="imagen" name="imagen" />
            </div>
            <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" name="categoria">
                <option value="entrante">Entrante</option>
                <option value="principal">Principal</option>
                <option value="postre">Postre</option>
            </select>
            </div>
            <button type="submit">Añadir plato</button>
        </form>
        </div>
    );
    }