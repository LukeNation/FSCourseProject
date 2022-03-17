const {getTasksFromList, createList, updateList, deleteList} = require('../models/list')

module.exports.getTasksFromList = async (req,res) => {
    const {idList} = req.params
    try {
        const tasks = await getTasksFromList(idList)
        return res.send(tasks)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createList = async(req,res) => {
    const {titulo} = req.params
    try {
        const list = await createList(titulo)
        return res.send(list)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateList = async (req,res) => {
    const {id, titulo} = req.params
    try {
        const lists = await updateList(id, titulo)
        return res.send(lists)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteList = async(req,res) => {
    const {id} = req.params
    try {
        const board = await deleteList(id)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}
