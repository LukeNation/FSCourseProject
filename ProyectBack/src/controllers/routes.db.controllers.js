const {todoPersonal, personalID, createPersona, updatePersona, deletePersona} = require('../models/persona')

module.exports.todoPersonalController = async (req,res) => {
    try {
        const personal = await todoPersonal()
        return res.send(personal)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.personalIDController = async(req,res) => {
    const {id} = req.params
    try {
        const persona = await personalID(id)
        return res.send(persona)
    } catch(err) {
        return res.send(err)
    }
}
module.exports.createPersonaController= async(req,res) => {
    const {nombre, apellido, dni, edad, activo } = req.body
    try {
        const persona = await createPersona(nombre, apellido, dni, edad, activo)
        return res.send(persona)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updatePersonaController = async(req,res) => {
    const {id} = req.params
    const {nombre, apellido, dni, edad, activo} = req.body
    try {
        const persona = await updatePersona(id, nombre, apellido, dni, edad, activo)
        return res.send(persona)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.deletePersonaController = async(req,res) => {
    const {id} = req.params
    try {
        const persona = await deletePersona(id)
        return res.send(persona)
    } catch(err) {
        return res.send(err)
    }
}