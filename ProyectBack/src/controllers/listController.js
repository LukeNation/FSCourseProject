const {todosList, listID, createList, updateList, deleteList, listID} = require('../models/list')

module.exports.todosListController = async (req,res) => {
    try {
        const list = await todosList()
        return res.send(list)
    } catch(err) {
       
        return res.send(err)
    }
}
module.exports.listIDController = async (req,res) => {
    const {idList} = req.params
    try {
        const list = await listID(idList)
        return res.send(list)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createListController = async(req,res) => {
    const {titulo} = req.params
    try {
        const list = await createList(titulo)
        return res.send(list)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateListController = async (req,res) => {
    const {id, titulo} = req.params
    try {
        const list = await updateList(id, titulo)
        return res.send(list)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteListController = async(req,res) => {
    const {id} = req.params
    try {
        const list = await deleteList(id)
        return res.send(list)
    } catch(err) {
        return res.send(err)
    }
}
