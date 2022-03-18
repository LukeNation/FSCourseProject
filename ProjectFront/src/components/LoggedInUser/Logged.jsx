import React from 'react';
import Navbar2 from '../Navbar2';
import Feature_3 from '../Home/img/Feature_3.webp'; 

const Logged = () => {
    return (
        <div>
            <Navbar2 />

            <div id="logged" className='container-fluid  text-center'>
                <div id="loggedMenu" className='row'>
                    <div id="loggedContent" className='container'>
                        <div id="textContent">
                            <h1>¡Hola, nombre usuario!</h1>
                            <p id="textoP">Qué bueno que llegaste :) . </p>
                            <p id="textoP">¿Estás listx para crear un nuevo tablero o seguir trabajando en un proyecto anterior?</p>
                        
                        <div id="imgBoardsBtn" className='container'>
                            <div className="col-md-6" id="imgFeatures">
                                <img id="imgLogged" src={Feature_3} className="img-fluid" alt="calendar" style={{ width: '400px' }} />
                            </div>
                        
                            <div className="container-fluid">
                            <h1>Mis Tableros</h1>
                            <div id='tablerosUsuario' className='col-mb-6'>
                                <h2>Tablero1</h2>
                                <h2>Tablero2</h2>
                                <h2>Tablero3</h2>
                            </div>

                            <div id="botonCrearTablero" className='col-mb-6'>
                                <button id="btnCrearTablero" type="button" className="btn btn-secondary">Nuevo Tablero</button>
                            </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logged;