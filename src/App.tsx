import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntornoHome from './Template/Entornos/TemplateHome';
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from './Routes/AppRoutes';
import NotificacionManagerComp from './Template/Components/NotificacionManagerComp';
import { UserProvider } from './Context/User/userProvider';

function App() {
  return (
      <BrowserRouter>
       <UserProvider>
        <div >
        <NotificacionManagerComp/>
        <AppRoutes/>
        </div>
       </UserProvider>
      </BrowserRouter>
  );
}

export default App;
