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
                                <Link to="/">Home</Link>
                                <Link to="/" >Características</Link>
                                <Link to="/" >Cómo empezar</Link>
                            </div>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" id="lineaLogin">
                                <Link to="/login" >Iniciar sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" >Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    )
}
export default Navbar;