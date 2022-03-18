const {getTask, createTask, updateTask, deleteTask} = require('../models/task')

module.exports.getTask = async (req,res) => {
    const {idList} = req.params
    try {
        const tasks = await getTask(idList)
        return res.send(tasks)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createTask = async(req,res) => {
    const {titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion} = req.params
    try {
        const task = await createTask(titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateTask = async (req,res) => {
    const {id, titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion} = req.params
    try {
        const task = await updateTask(id, titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion)
        return res.send(task)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteTask = async(req,res) => {
    const {id} = req.params
    try {
        const task = await deleteTask(id)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}
