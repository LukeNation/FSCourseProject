import React from 'react';
import Task from './Task';

const List = () => {
    return (
        <div id='lista' className='col-md-3'>
            <h6 id="nombreLista">To do</h6>
            <Task />
        </div>
        )
    }
    
export default List;