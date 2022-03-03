import React from 'react';
import Editor from './Editor';
import List from './List';
import Task from './Task';
import Bar from './Bar';


const Board = () => {
    return (

        <div id="board" className='container-fluid'>
            <Bar />

            <h1 className='text-center'>Tablero</h1>

            <Editor />
            <List />
            <Task />


        </div>

    )
}

export default Board;