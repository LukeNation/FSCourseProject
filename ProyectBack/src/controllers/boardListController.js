const {getListFromBoard } = require('../models/board-list')

module.exports.getListFromBoardController = async (req,res) => {
    const {idBoard} = req.params
    try {
        const lists = await getListFromBoard(idBoard)
        return res.send(lists)
    } catch(err) {
       
        return res.send(err)
    }
}