const {db} = require('../controllers/database.controller')

//para hacer el get a todas las list de mi board
module.exports.getListFromBoards = async (idBoard) => {
    const data = await db(`SELECT * FROM BOARD-LIST,LIST INNER JOIN LIST ON BOARD-LIST.idList == LIST.id WHERE BOARD-LIST.idBoard = ${idBoard};`)
    console.log(data)
    return {
        list: data
    }
} 