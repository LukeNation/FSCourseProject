const {db} = require('../controllers/database.controller')

module.exports.todosUsers = async () => {
    const data = await db("SELECT * FROM USERTREYO;")
    console.log(data)
    return {
        user: data
    }
} 

module.exports.getUserInfo = async (id) => {
    const data = await db(`SELECT * FROM USERTREYO WHERE id = ${id}`)
    console.log(data)
    return {
        user : data[0]
    }  
}
//hay que validar el usuario a ver si ya existe.
module.exports.createUser = async(nombre, apellido, usuario, contrasena) => {
    const data = await db(`INSERT INTO USERTREYO(nombre, apellido, usuario, contrasena) VALUES ("${nombre}", "${apellido}", "${usuario}", "${contrasena}")`)
    return {
        message: `Usuario creado con id ${data.id}`
    }
}

module.exports.updateUser = async(id, nombre, apellido, usuario, contrasena) => {
    const data = await db(`UPDATE USERTREYO SET nombre = "${nombre}", apellido = "${apellido}", usuario = "${usuario}", contrasena = "${contrasena}" WHERE id = ${id}`)
    return {
        message: `Usuario actualizado con id ${data.id}`
    }
}

module.exports.deleteUser = async (id) => {
    const data = await db(`DELETE FROM USERTREYO WHERE id = ${id}`)
    return {
        message: `usuario eliminada con id ${data.id}`
    }  
}

module.exports.getBoardsFromUsers = async (idUser) => {
    const data = await db(`SELECT BOARD.id as idTablero,titulo,nombre,apellido FROM USERTREYO INNER JOIN BOARD ON USERTREYO.id = BOARD.autor WHERE USERTREYO.id = ${idUser};`)
    console.log(data)
    return {
        board: data
    }
} 

module.exports.getTaskFromUsers = async (idUser) => {
    const data = await db(`SELECT TASK.id as idTask,titulo,nombre,apellido FROM USERTREYO INNER JOIN TASK ON USERTREYO.id = TASK.autor WHERE USERTREYO.id = ${idUser};`)
    console.log(data)
    return {
        board: data
    }
} 

