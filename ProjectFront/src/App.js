import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './style/index.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Board from './components/Board.js';


function App() {
  return (
<BrowserRouter>
    <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/tablero" element={<Board/>}/>
    </Routes>

    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
