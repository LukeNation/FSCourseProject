const {todosBoards, getBoard, getTaskFromBoard, createBoard, updateBoard, deleteBoard} = require('../models/board')

module.exports.todosBoardsController = async (req,res) => {
    try {
        const boards = await todosBoards()
        return res.send(boards)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.getBoardController = async(req,res) => {
    const {id} = req.params
    try {
        const board = await getBoard(id)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.getTaskFromBoardController = async (req,res) => {
    const {id} = req.params
    try {
        const userBoard = await getTaskFromBoard(id)
        return res.send(userBoard)
    } catch(err) {
       
        return res.send(err)
    }
}


module.exports.createBoardController = async(req,res) => {
    const {titulo,autor} = req.body
    try {
        const board = await createBoard(titulo,autor)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateBoardController = async (req,res) => {
    const {id} = req.params
    const {titulo, autor} = req.body
    try {
        const board = await updateBoard(id, titulo, autor)
        return res.send(board)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteBoardController = async(req,res) => {
    const {id} = req.params
    try {
        const board = await deleteBoard(id)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}