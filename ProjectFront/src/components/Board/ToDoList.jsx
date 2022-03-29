import React from 'react'

function ToDoList({ getTask, updateTask, setUpdateTask }) {


    const handelDelete = id => {
        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:4000/task/info/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setUpdateTask(true)
    }

    const handelUpdate = id => {
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateTask)
        }


        fetch('http://localhost:4000/task/info/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setUpdateTask(true)
    }


    return (
        <>
            <div id='lista' className='col-md-4' style={{ width: '30%' }}>
                <div id='editor' className='container-fluid'>
                    <form className="form-group">
                        <label>Tareas</label>
                        {getTask.map(getTask =>
                            <div key={getTask.id}>
                                <h3>{getTask.titulo}</h3>
                                <button onClick={() => handelDelete(getTask.id)} id='botonTask'><i className="bi bi-file-x"></i></button>
                                <button onClick={() => handelUpdate(getTask.id)} id='botonTask'><i className="bi bi-pencil"></i></button>
                                <input type='checkBox' className='form-check-input'></input>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default ToDoList