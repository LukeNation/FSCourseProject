import React from 'react'

function TaskList({createTask, SetCreateTask}) {

    const handelChange = (e) => {
    SetCreateTask({
        ...createTask,
        [e.target.name]: e.target.value
    })
}

    const handelSubmit = () => {
        // validacion de datos
        if(createTask.titulo === ''){
            alert('todos los campos son obligatorios')
            return
        }

        // consutla

        const requestInit = {
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(createTask)
        }


        fetch('http://localhost:4000/create', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => SetCreateTask(res))
    }


    return (
        <>
            <div id='lista' className='col-md-4' style={{ width: '30%' }}>
                <h3 className='text-center'>Registras tu tarea</h3>
                <div id='editor' className='container-fluid'>
                    <form onSubmit={handelSubmit} id="editorBox" className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control p-3"
                            id="editorTarea"
                            placeholder="Agregue una tarea"
                            onChange={handelChange}
                            name="title"
                        />
                    </form>
                    <button className="btn btn-primary btn-lg" type='Submit'>Agregar</button>
                </div>
            </div>
        </>
    )
}

export default TaskList