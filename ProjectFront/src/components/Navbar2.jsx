import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">PANA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div>
                    <button id="botonCerrarSesion" type="button" className="btn btn-success">Cerrar sesión</button> 
                    </div>
                        <div className='col-md-1 divBootonUsuario'>
                                    <button id="botonUsuario" type="button" className="btn btn-secondary">LU</button>
                                    </div>

                </div>
            </nav>
        </div>
      
    )

}
export default Navbar2;