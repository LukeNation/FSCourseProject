import React from 'react';
import Bar from './Board/Bar';
import TaskList from './Board/TaskList';
import ToDoList from './Board/ToDoList';
import DoneList from './Board/DoneList';
import Navbar2 from './Navbar2';



const Board = () => {
    return (
        <div className='tablero1'>
            <Navbar2 />
            <div id="board" className='container-fluid'>
                <Bar />
                <div id="board1">
                    <TaskList />
                    <ToDoList/>
                    <DoneList/>
                </div>
            </div>
        </div>

    )
}

export default Board;