const {db} = require('../controllers/database.controller')

module.exports.todoPersonal = async () => {
    const data = await db("SELECT * FROM persona;")
    console.log(data)
    return {
        personal: data
    }
} 

module.exports.personalID = async (id) => {
    const data = await db(`SELECT * FROM persona WHERE id = ${id}`)
    console.log(data)
    return {
        persona : data[0]
    }  
}

module.exports.createPersona = async(nombre, apellido, dni, edad, activo) => {
    const data = await db(`INSERT INTO persona(nombre, apellido, dni, edad, activo) VALUES ("${nombre}", "${apellido}", ${dni}, ${edad}, ${activo})`)

    return {
        message: `Persona creada con id ${data.id}`
    }
}

module.exports.updatePersona = async(id, nombre, apellido, dni, edad, activo) => {
    const data = await db(`UPDATE persona SET nombre = "${nombre}", apellido = "${apellido}", dni = ${dni}, edad = ${edad}, activo = ${activo} WHERE id = ${id}`)
    return {
        message: `Persona actualizada con id ${data.id}`
    }
}

module.exports.deletePersona = async (id) => {
    const data = await db(`DELETE FROM persona WHERE id = ${id}`)
    return {
        message: `Persona eliminada con id ${data.id}`
    }  
}