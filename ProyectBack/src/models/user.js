const {db} = require('../controllers/database.controller');
const { comparadorPassword,hashPassword} = require('../utils/password');

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
    const passwordEncriptado = hashPassword(password)
    const data = await db(`INSERT INTO USER(nombre, apellido, usuario, contrasena) VALUES ("${nombre}", "${apellido}", "${usuario}", "${contrasena}", "${passwordEncriptado}")`)
    return {
        message: `Usuario creado con id ${data.id}`
    }
}
module.exports.usuarioContrasena = async (usuario, contrasena) => {
    const data = await db(`SELECT * FROM USER WHERE usuario = "${usuario}"`)

    if(data.lenght !== 0 && comparadorPassword(contrasena, data[0].contrasena)) {
        let {nombre, apellido, usuario, contrasena} = data[0]
        let user = {"nombre" : nombre, "apellido": apellido, "usuario": usuario, "contrasena": contrasena}
        return {
            cliente : user,
            message: true
        }
    } else {
        return {
           message: false
        }
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

