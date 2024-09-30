import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListarReservas from './Components/Reservas/ListaReservas';
import NuevaReserva from './Components/Reservas/NuevaReserva'; // Otros componentes
import Personal from './Components/Personal';
import Carta from './Components/Carta/Carta';
import Reserva from './Components/Reservas/Reserva'
import NotFound from './Components/Componentes Personalizados/NotFound';
import MenuCartaDetalles from './Components/Carta/MenuCartaDetalles';
import Home from './Components/Home/Home';
import NuevoPlato from './Components/Carta/NuevoPlato';


const App = () => {
  return (
    <Router>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<ListarReservas />} />
          <Route path="/nueva-reserva" element={<NuevaReserva />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/menu" element={<Carta />} />
          <Route path="/modificar-reserva/:id" element={<NuevaReserva />} />
          <Route path='/reserva/:id' element={<Reserva/>}/>
          <Route path="/menuDetalles/:id" element={<MenuCartaDetalles />} />
          <Route path='/nuevo-plato' element={<NuevoPlato />} />
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
