import React from 'react'

function TaskList({createTask, setCreateTask}) {

    const handelChange = (e) => {
    setCreateTask({
        ...createTask,
        [e.target.name]: e.target.value
    })
}

    const handelSubmit = (e) => {
        console.log(createTask)
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
        .then(res => setCreateTask(res))
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
                </div>
            </div>
        </>
    )
}

export default TaskList