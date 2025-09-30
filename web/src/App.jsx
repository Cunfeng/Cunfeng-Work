
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Microsoft from './components/Microsoft';
import Eni from './components/Eni';
import CrossZoneMigration from './components/CrossZoneMigration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microsoft" element={<Microsoft />} />
        <Route path="/eni" element={<Eni />} />
        <Route path="/cross-zone-migration" element={<CrossZoneMigration />} />
      </Routes>
    </BrowserRouter>
  );
}