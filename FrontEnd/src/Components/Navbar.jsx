import React from 'react';
import '../styles/Navbar.css'; // Importamos el archivo CSS para los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Restaurante</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/reservas">Lista de reservas</a>
        </li>
        <li>
          <a href="/nueva-reserva">Nueva reserva</a>
        </li>
        <li>
          <a href="/personal">Personal</a>
        </li>
        <li>
          <a href="/menu">Menú</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
