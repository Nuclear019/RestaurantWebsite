import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListarReservas from './Components/ListaReservas';
import NuevaReserva from './Components/NuevaReserva'; // Otros componentes
import Personal from './Components/Personal';
import Menu from './Components/Menu';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/reservas" element={<ListarReservas />} />
          <Route path="/nueva-reserva" element={<NuevaReserva />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
