import React, {useState} from 'react';
import Bar from './Board/Bar';
import TaskList from './Board/TaskList';
import ToDoList from './Board/ToDoList';
import DoneList from './Board/DoneList';
import Navbar2 from './Navbar2';



const Board = () => {

    const [createTask, setCreateTask] = useState([{
        id: '',
        title:''
    }]);


    return (
        <div className='tablero1'>
            <Navbar2/>
            <div id="board" className='container-fluid'>
                <Bar/>
                <div id="board1">
                    <TaskList createTask={createTask} setCreateTask={setCreateTask}/>
                    <ToDoList/>
                    <DoneList/>
                </div>
            </div>
        </div>

    )
}

export default Board;