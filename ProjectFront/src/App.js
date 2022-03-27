import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Board from './components/Board';
import Logged from './components/LoggedInUser/Logged';
import './style/index.css';
import './style/Home.css';
import './style/LoginAndRegister.css';
import './style/Board.css';
import './style/Logged.css'




function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
