import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './style/index.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Tablero from './components/tablero.js';


function App() {
  return (
<BrowserRouter>
    <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/tablero" element={<Tablero/>}/>
    </Routes>

    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
