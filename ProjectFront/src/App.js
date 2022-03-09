import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Board from './components/Board/Board';
import './style/index.css'
import './style/Home.css'




function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tablero" element={<Board />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
