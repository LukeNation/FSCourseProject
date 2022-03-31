import React, {useState} from 'react'

export const TaskCreator = props =>  {
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName (e.target.value)
    
    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('')
    }
    return (
        <div className=" col-md-3 m-4" id='formCSS'>
            <h3 className='text-center'>Crear Tarea</h3>
            <input
             type="text" 
             className='form-control' 
             value={newTaskName} 
             onChange={updateNewTaskValue}
             />
             <button className='btn btn-danger mt-2' onClick={createNewTask} >Agregar</button>
        </div>
    )
}