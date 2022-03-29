import React, {useState, useEffect} from 'react';
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

    const [getTask, setGetTask] = useState([{
        id:'0',
        titulo:'TAREA 1',
    },
    {
        id:'1',
        titulo:'TAREA 2',
    },
    {
        id:'2',
        titulo:'TAREA 3',
    }

])
    
    useEffect(()=> {
        const task = () => {
            fetch('http://localhost:4000/task')
            .then(res => res.json())
            .then(res => setGetTask(res))
        }    
        task();
        }, [])




    return (
        <div className='tablero1'>
            <Navbar2/>
            <div id="board" className='container-fluid'>
                <Bar/>
                <div id="board1">
                    <TaskList createTask={createTask} setCreateTask={setCreateTask}/>
                    <ToDoList getTask={getTask}/>
                    <DoneList/>
                </div>
            </div>
        </div>

    )
}

export default Board;