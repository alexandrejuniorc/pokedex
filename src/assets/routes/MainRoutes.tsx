// react uses - router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages components
import { Contact } from 'src/pages/Contact';
import { Home } from 'src/pages/Home';
import { Pokedex } from 'src/pages/Pokedex';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
