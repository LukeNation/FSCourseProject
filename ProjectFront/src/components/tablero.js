import React from 'react';
import Editor from './editor';
import Lista from './lista';
import Task from './task';


const Tablero = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Tus tableros</h1>
        <div id='Listas'>
        </div>
        
        <Editor/>
        <Lista/>
        <Task/>

        </div>
        )
    }
    
export default Tablero;