const express = require('express')
const router = express.Router()

const {getBoardsFromUsersController} = require('../controllers/userBoardController')

router.get("/:id", getBoardsFromUsersController)

module.export = router;