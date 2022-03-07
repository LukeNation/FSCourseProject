import React from 'react';
import Bar from './Bar';



const Board = () => {
    return (

        <div id="board" className='container-fluid'>
            
            <Bar />
           
            <div id="board1">
            
            {/*Lista*/}
            <div id='lista' className='col-md-3'>
            <input type="text" class="form-control" id="nombreLista" placeholder="Nombre de la lista"></input>
            {/*Editor*/}
            <div id='editor' className='container-fluid'>

            <div id="editorBox" className="input-group mb-3">
                <input type="text" className="form-control" id="editorTarea" placeholder="Agregue una tarea"></input>
                <button type="submit" className="btn mb-3" id="deleteTask"><i className="bi bi-trash"></i></button>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn mb-3" id="agregar">Agregar +</button>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn mb-3" id="deleteList"><i className="bi bi-trash"></i></button>
            </div>
        </div>
            
        </div>
            {/*Botón AddList*/}
            <div id='addList' className='col-md-2'>
            <button type="button" class="btn btn-secondary" id="botonAddList">Agregar lista +</button>
           
        </div>
            </div>
        </div>

    )
}

export default Board;