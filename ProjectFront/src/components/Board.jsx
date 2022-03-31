import React, {useState, useEffect} from 'react';
import {Bar} from './Board/Bar';
import TaskList from './Board/TaskList';
import {TaskCreator} from './Board/TaskCreator';
import {VisibilityCrontol} from './Board/VisibilityCrontol';
import {TaskRow} from './Board/TaskRow'
import Navbar2 from './Navbar2';



const Board = () => {
    const [userName, setUserName] = useState('Lucas Aprea');

    const [taskItem, setTaskItem] = useState([
        {nombre:'tarea para marce', listo: false},
        
    ]);

    const [showCompleted, setShowCompleted] = useState(true);

    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data != null) {
            setTaskItem(JSON.parse(data))
        } else {
              setUserName("Lucas");
              setTaskItem([
                {nombre:'tarea para marce', listo: false},
              ]);
              setShowCompleted(true);
              
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskItem));
        localStorage.clear();
      }, [taskItem]);



      const createNewTask = taskName => {
        if (!taskItem.find(t => t.nombre === taskName)) {
          setTaskItem([...taskItem, { nombre: taskName, listo: false }]);
        }
      };
    
      const toggleTask = task =>
        setTaskItem(
          taskItem.map(t => (t.nombre === task.nombre ? { ...t, listo: !t.listo } : t))
        );
    
      const taskTableRows = doneValue => 
        taskItem
          .filter(task => task.listo === doneValue)
          .map(task => (
            <TaskRow key={task.nombre} task={task} toggleTask={toggleTask} />
          ))


    return (
        <div className='tablero1'>
            <Navbar2 />
            <div id="board" className='container-fluid'>
                <Bar />
                <div id="board1" className='row'>
                    <TaskCreator callback={createNewTask} />
                    <TaskList taskItem={taskItem} toggleTask={toggleTask} />
                    <div className="col-md-4 bg-dark text-white p-2 m-4" id='INPUT'>
                        <VisibilityCrontol description='Tareas Completas'
                            isChecked={showCompleted}
                            callback={checked => setShowCompleted(checked)}
                        />
                         {
                        showCompleted && (
                            <table className='table table-dark table-striped'>
                                <tbody>
                                    {taskTableRows(true)}
                                </tbody>
                            </table>
                        )
                    }
                    </div>
                   
                </div>
            </div>
        </div>

    )
}

export default Board;