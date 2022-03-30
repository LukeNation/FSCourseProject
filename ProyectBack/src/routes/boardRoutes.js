const express = require('express')
const router = express.Router()

const {todosBoardsController, getBoardController, getTaskFromBoardController, createBoardController, updateBoardController, deleteBoardController} = require('../controllers/boardController')

router.get("/", todosBoardsController)
router.get("/info/:id", getBoardController)
router.get("/task/:id", getTaskFromBoardController)
router.post("/new", createBoardController)
router.put("/update/:id", updateBoardController)
router.delete("/delete/:id", deleteBoardController)

module.exports = router