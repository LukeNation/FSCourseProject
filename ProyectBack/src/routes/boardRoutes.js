const express = require('express')
const router = express.Router()

const {getBoardsFromUser, getBoard, getListsFromBoard, createBoard, updateBoard, deleteBoard} = require('../controllers/boardController')

router.get("/idUser/:idUser", getBoardsFromUser)
router.get("/id/:id", getBoard)
router.get("/:idBoard/lists", getListsFromBoard)
router.post("/new", createBoard)
router.put("/update/:id", updateBoard)
router.delete("/board/delete/:id", deleteBoard)

module.exports = router