const {db} = require('../controllers/database.controller')

//para hacer el get a todas las tareas
module.exports.todosTask = async () => {
    const data = await db("SELECT * FROM TASK;")
    console.log(data)
    return {
        tarea: data
    }
} 

// para hacer el get a task/:id
module.exports.getTask = async (id) => {
    const data = await db(`SELECT * FROM TASK WHERE id = ${id}`)
    console.log(data)
    return {
        tarea : data[0]
    }  
}

//para hacer el post a task/new
module.exports.createTask = async(titulo, cuerpo, prioridad, autor, idTablero) => {
    const data = await db(`INSERT INTO TASK (titulo, cuerpo, autor, prioridad, idTablero) VALUES ("${titulo}", "${cuerpo}",${autor}, ${prioridad}, ${idTablero})`)

    return {
        message: `Tarea creada con id ${data.id}`
    }
}

//para hacer el put a task/update/:id
module.exports.updateTask = async(id, titulo, cuerpo,autor, prioridad, idTablero) => {
    const data = await db(`UPDATE TASK SET titulo = "${titulo}", cuerpo = "${cuerpo}", autor = ${autor}, prioridad = ${prioridad}, idTablero = ${idTablero} WHERE id = ${id}`)
    return {
        message: `Tarea actualizada con id ${data.id}`
    }
}

//para hacer el delete a task/delete/:id
module.exports.deleteTask = async (id) => {
    const data = await db(`DELETE FROM TASK WHERE id = ${id}`)
    return {
        message: `Tarea eliminada con id ${data.id}`
    }  
}