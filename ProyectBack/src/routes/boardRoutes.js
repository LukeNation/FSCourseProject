const express = require('express')
const router = express.Router()

const {todosBoardsController, getBoardController, createBoardController, updateBoardController, deleteBoardController} = require('../controllers/boardController')

router.get("/", todosBoardsController)
router.get("/:id", getBoardController)
router.post("/new", createBoardController)
router.put("/update/:id", updateBoardController)
router.delete("/board/delete/:id", deleteBoardController)

module.exports = router