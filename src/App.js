import Top from "./containers/Header";
import { Home } from "./pages/HomePage/index";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
    <Top/>
    <Home/>
      
    </div>
  );
}

export default App;
