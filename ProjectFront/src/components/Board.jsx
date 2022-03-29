import React, {useState, useEffect} from 'react';
import Bar from './Board/Bar';
import TaskList from './Board/TaskList';
import ToDoList from './Board/ToDoList';
import DoneList from './Board/DoneList';
import Navbar2 from './Navbar2';



const Board = () => {

    const [getTask, setGetTask] = useState([{
        id:'0',
        titulo:'TAREA 1',
        prioridad: 0
    },
    {
        id:'1',
        titulo:'TAREA 2',
        prioridad: 0
    },
    {
        id:'2',
        titulo:'TAREA 3',
        prioridad: 0
    }
])

    const [createTask, setCreateTask] = useState([{
        titulo:'',
        prioridad: 0
    }]);

    const [updateTask, setUpdateTask] = useState(false)
    
    useEffect(()=> {
        const task = () => {
            fetch('http://localhost:4000/task/info/:id')
            .then(res => res.json())
            .then(res => setGetTask(res))
        }    
        task();
        setUpdateTask(false)
        }, [updateTask])




    return (
        <div className='tablero1'>
            <Navbar2/>
            <div id="board" className='container-fluid'>
                <Bar/>
                <div id="board1">
                    <TaskList createTask={createTask} setCreateTask={setCreateTask}/>
                    <ToDoList getTask={getTask} updateTask={updateTask} setUpdateTask={setUpdateTask}/>
                    <DoneList/>
                </div>
            </div>
        </div>

    )
}

export default Board;