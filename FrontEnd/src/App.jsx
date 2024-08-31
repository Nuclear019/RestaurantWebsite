import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListarReservas from './Components/ListaReservas';
import NuevaReserva from './Components/NuevaReserva'; // Otros componentes
import Personal from './Components/Personal';
import Menu from './Components/Menu';
import ProximasReservas from './Components/ProximasReservas';
import ReservaService from './services/ReservaService';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProximasReservas />} />
          <Route path="/reservas" element={<ListarReservas />} />
          <Route path="/nueva-reserva" element={<NuevaReserva />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/modificar-reserva/:id" element={<NuevaReserva />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
