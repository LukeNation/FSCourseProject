const express = require('express')
const router = express.Router()

const {getListFromBoardController} = require('../controllers/boardListController')

router.get("/:id", getListFromBoardController)

module.export = router;