import React from 'react';
import '../styles/Navbar.css'; // Importamos el archivo CSS para los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="/">Restaurante Lorem Ipsum</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/nueva-reserva">Nueva reserva</a>
        </li>

        <li>
          <a href="/menu">Carta platos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
