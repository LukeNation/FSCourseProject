import React from 'react';

const Bar = () => {
    return (
        <div id='barra' className='container-fluid'>
            <div className='col-md-3 boxTablero'>
            <input type="text" className="form-control" id="nombreTablero" placeholder="Escriba el nombre del tablero"></input>
            </div>
            <div className='col-md-6 ps-5'>
            <button id="botonMiembros" type="button" className="btn btn-secondary">LU</button>
            <button id="botonMiembros" type="button" className="btn btn-secondary">MA</button>
            <button id="botonMiembros" type="button" className="btn btn-secondary">AG</button>
            <button id="botonMiembros" type="button" className="btn btn-secondary">PA</button>
            <button id="botonInvitar" type="button" className="btn btn-success">Invitar +</button>
            </div>
            

        </div>

    );
}

export default Bar;