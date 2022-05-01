import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage';
import Timer from './components/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="countDown" element={<MainPage />} />
      <Route path='timer' element={<Timer />} />
    </Routes>
  </BrowserRouter>
);
