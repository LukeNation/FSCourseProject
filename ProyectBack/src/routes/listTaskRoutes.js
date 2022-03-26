const express = require('express')
const router = express.Router()

const {getTaskFromListController} = require('../controllers/listTaskController')

router.get("/:id", getTaskFromListController)

module.export = router;