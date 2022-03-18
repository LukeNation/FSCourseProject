const {db} = require('../controllers/database.controller')
// para hacer el get a todos los board "/" que NO esta en las routes.
module.exports.todosBoards = async () => {
    const data = await db("SELECT * FROM board;")
    console.log(data)
    return {
        board: data
    }
} 

//para hacer el get a board/:id
module.exports.getBoard = async (id) => {
    const data = await db(`SELECT * FROM BOARD WHERE id = ${id}`)
    console.log(data)
    return {
        board : data[0]
    }  
}

//para hacer el post a board/new   //Agregue validacion de usuario.
module.exports.createBoard = async(idUser, titulo, autor) => {
    const idU = await db(`SELECT id FROM USER WHERE USER.id = ${idUser} `)
    if (idU != null){
        const data = await db(`INSERT INTO BOARD (titulo, autor) VALUES ("${titulo}", "${autor}")`)

        return {
            message: `Tablero creado con id ${data.id}`
    }
    } else{
        console.log("Usuario invalido")
    }

}

//para hacer el put a board/update/:id
module.exports.updateBoard = async(id, titulo, color) => {
    const data = await db(`UPDATE BOARD SET titulo = "${titulo}", color = ${color} WHERE id = ${id}`)
    return {
        message: `Tablero actualizado con id ${data.id}`
    }
}

//para hacer el delete a board/delete/:id
module.exports.deleteBoard = async (id) => {
    const data = await db(`DELETE FROM BOARD WHERE id = ${id}`)
    return {
        message: `Tablero eliminado con id ${data.id}`
    }  
}