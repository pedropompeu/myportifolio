import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './view/components/Navbar';
import Footer from './view/components/Footer';
import Home from './view/pages/Home';
import SobreMim from './view/pages/SobreMim';
import MeuCurriculo from './view/pages/MeuCurriculo';
import Contato from './view/pages/Contato';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/meu-curriculo" element={<MeuCurriculo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;