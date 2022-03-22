const {db} = require('../controllers/database.controller')

//para hacer el get a todos los boards de mi user
module.exports.getBoardsFromUsers = async (idUser) => {
    const data = await db(`SELECT * FROM USER-BOARD,BOARD INNER JOIN BOARD ON USER-BOARD.idBoard == BOARD.id WHERE USER-BOARD.idUser = ${idUser};`)
    console.log(data)
    return {
        board: data
    }
} 

