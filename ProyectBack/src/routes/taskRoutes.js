const express = require('express')
const router = express.Router()

const {getTask, createTask, updateTask, deleteTask} = require('../controllers/taskController')

router.get("/:id", getTask)
router.post("/new", createTask)
router.put("/update/:id", updateTask)
router.delete("/delete/:id", deleteTask)


module.exports = router