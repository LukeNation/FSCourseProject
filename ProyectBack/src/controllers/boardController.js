const {getBoardsFromUser, getBoard, getListFromBoard, createBoard, updateBoard, deleteBoard} = require('../models/board')

module.exports.getBoardsFromUser = async (req,res) => {
    const {idUser} = req.params
    try {
        const boards = await getBoardsFromUser(idUser)
        return res.send(boards)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.getBoard = async(req,res) => {
    const {id} = req.params
    try {
        const board = await getBoard(id)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.getListFromBoard = async (req,res) => {
    const {idBoard} = req.params
    try {
        const lists = await getListFromBoard(idBoard)
        return res.send(lists)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.createBoard = async(req,res) => {
    const {titulo,autor} = req.params
    try {
        const board = await createBoard(titulo,autor)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateBoard = async (req,res) => {
    const {id, titulo, color} = req.params
    try {
        const boards = await updateBoard(id, titulo, color)
        return res.send(boards)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.deleteBoard = async(req,res) => {
    const {id} = req.params
    try {
        const board = await deleteBoard(id)
        return res.send(board)
    } catch(err) {
        return res.send(err)
    }
}