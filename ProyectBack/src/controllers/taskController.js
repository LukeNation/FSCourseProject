const {todosTask, getTask, createTask, updateTask, deleteTask} = require('../models/task')

module.exports.todosTaskController = async (req,res) => {
    try {
        const tasks = await todosTask()
        return res.send(tasks)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.getTaskController = async (req,res) => {
    const {id} = req.params
    try {
        const tasks = await getTask(id)
        return res.send(tasks)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createTaskController = async(req,res) => {
    const {titulo, cuerpo, prioridad, autor, idTablero} = req.body
    try {
        const task = await createTask(titulo, cuerpo, prioridad,autor, idTablero)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateTaskController = async (req,res) => {
    const {id} = req.params
    const {titulo, cuerpo,autor, prioridad, idTablero} = req.body
    try {
        const task = await updateTask(id, titulo, cuerpo, autor, prioridad, idTablero)
        return res.send(task)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteTaskController = async(req,res) => {
    const {id} = req.params
    try {
        const task = await deleteTask(id)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}
