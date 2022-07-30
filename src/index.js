import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  LoginPage  from './pages/LoginPage/index'
import  RegisterPage  from './pages/RegisterPage/index'
import Welcome from './components/Welcome/Welcome'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<App/>}/>
           <Route path='/login' element={<LoginPage/>}/>
           <Route path='/register' element={<RegisterPage/>}/>
           <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    
    
  </React.StrictMode>
);
