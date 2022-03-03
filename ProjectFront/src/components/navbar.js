import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div classname="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">PANA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul>
                                    <li><Link to="/" style={{textDecoration: 'none', color: "black"}}>Home</Link></li>
                                    <li><Link to="/" style={{textDecoration: 'none', color: "black"}} >Características</Link></li>
                                    <li><Link to="/" style={{textDecoration: 'none', color: "black"}}>Cómo empezar</Link></li>
                                </ul>
                            </div>
                        </div>
                        <ul id="loginNav" className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" id="lineaLogin">
                                <Link to="/login" style={{textDecoration: 'none', color: "black"}}>Iniciar sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" style={{textDecoration: 'none', color: "black"}}>Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    )
}
export default Navbar;