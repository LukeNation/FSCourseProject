import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Board from './components/Board/Board';
import './style/index.css'



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
