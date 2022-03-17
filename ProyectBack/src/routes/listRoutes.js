const express = require('express')
const router = express.Router()

const {getTasksFromList, createList, updateList, deleteList} = require('../controllers/listController')


router.get("/:idList/tasks", getTasksFromList)
router.post("/new", createList)
router.put("/update/:id", updateList)
router.delete("/delete/:id", deleteList)

module.exports = router