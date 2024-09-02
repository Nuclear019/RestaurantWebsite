import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListarReservas from './Components/Reservas/ListaReservas';
import NuevaReserva from './Components/Reservas/NuevaReserva'; // Otros componentes
import Personal from './Components/Personal';
import Menu from './Components/Menu';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ListarReservas />} />
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
