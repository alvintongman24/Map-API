import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDis from './Components/MovieDis.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Movie" element={<MovieDis />} />
    </Routes>
  </BrowserRouter>
);
