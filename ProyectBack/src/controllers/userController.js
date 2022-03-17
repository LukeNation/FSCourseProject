
const {getUserInfo, createUser, updateUser, updateUserToAdmin} = require('../models/user')
module.exports.getUserInfo = async (req,res) => {
    const {id} = req.params
    try {
        const user = await getUserInfo(id)
        return res.send(user)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createUser = async(req,res) => {
    const {nombre, apellido, usuario, contrasena} = req.params
    try {
        const task = await createUser(nombre, apellido, usuario, contrasena)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateUser = async (req,res) => {
    const {id, nombre, apellido, usuario, contrasena} = req.params
    try {
        const task = await updateUser(id, nombre, apellido, usuario, contrasena)
        return res.send(task)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.updateUserToAdmin = async(req,res) => {
    const {id} = req.params
    try {
        const task = await updateUserToAdmin(id)
        return res.send(task)
    } catch(err) {
        return res.send(err)
    }
}
