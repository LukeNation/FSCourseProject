import React from 'react';


const Bar = () => {
  
    return (
        <div id='barra' className='container-fluid'>
            <div className='col-md-3 boxTablero'>
                <input type="text" className="form-control m-2" id="nombreTablero" placeholder="Escriba el nombre del tablero"></input>
            </div>
                <button id="botonInvitar" type="button" className="btn btn-success ms-auto">Invitar +</button>
        </div>

    );
}

export default Bar;