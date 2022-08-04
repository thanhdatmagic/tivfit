
import { Home } from "./pages/HomePage/index";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useState } from "react";
import  LoginPage  from './pages/LoginPage/index'
import  RegisterPage  from './pages/RegisterPage/index'
import  ProfilePage  from './pages/Profile/Profile'
import axios from "axios";

function App() {
  const  [user,setUser]=useState(localStorage.getItem('userlog') ? JSON.parse(localStorage.getItem('userlog')):'')
  


  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home user={user}/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<ProfilePage user={user}/>}/>      
          </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
