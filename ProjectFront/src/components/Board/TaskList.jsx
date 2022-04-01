import React from 'react'
import {TaskRow} from './TaskRow'

function TaskList({ taskItem, toggleTask }) {

    const taskTableRows = doneValue =>
    taskItem
      .filter(task => task.listo === doneValue)
      .map(task => (
        <TaskRow key={task.nombre} task={task} toggleTask={toggleTask} />
      ));
                  
    return (
        <>
            <div className="col-md-4">
                <table className='table table-dark table-striped mt-4 p-2'>
                    <thead>
                        <tr>
                            <th>Tareas</th>
                            <th>Listo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskTableRows(false)}
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

export default TaskList