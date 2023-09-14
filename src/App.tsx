import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntornoHome from './Template/Entornos/TemplateHome';
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  );
}

export default App;
