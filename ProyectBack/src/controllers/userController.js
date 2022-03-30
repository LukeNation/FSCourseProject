const {getUserInfo, createUser, updateUser, updateUserToAdmin, todosUsers, getBoardsFromUsers, getTaskFromUsers} = require('../models/user')

module.exports.todosUsersController = async (req,res) => {
    try {
        const user = await todosUsers()
        return res.send(user)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.getUserInfoController = async (req,res) => {
    const {id} = req.params
    try {
        const user = await getUserInfo(id)
        return res.send(user)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createUserController = async(req,res) => {
    const {nombre, apellido, usuario, contrasena} = req.body
    try {
        const user = await createUser(nombre, apellido, usuario, contrasena)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateUserController = async (req,res) => {
    const {id, nombre, apellido, usuario, contrasena} = req.body
    try {
        const user = await updateUser(id, nombre, apellido, usuario, contrasena)
        return res.send(user)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.updateUserToAdminController = async(req,res) => {
    const {id} = req.params
    try {
        const user = await updateUserToAdmin(id)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.getBoardsFromUsersController = async (req,res) => {
    const {id} = req.params
    try {
        const userBoard = await getBoardsFromUsers(id)
        return res.send(userBoard)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.getTaskFromUsersController = async (req,res) => {
    const {id} = req.params
    try {
        const userBoard = await getTaskFromUsers(id)
        return res.send(userBoard)
    } catch(err) {
       
        return res.send(err)
    }
}
