const express = require('express')
const router = express.Router()

const {getTaskController, todosTaskController, createTaskController, updateTaskController, deleteTaskController} = require('../controllers/taskController')

router.get("/", todosTaskController)
router.get("/:id", getTaskController )
router.post("/new", createTaskController)
router.put("/update/:id", updateTaskController)
router.delete("/delete/:id", deleteTaskController)


module.exports = router