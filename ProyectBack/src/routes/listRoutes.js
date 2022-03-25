const express = require('express')
const router = express.Router()

const {todosListController, listIDController, createListController, updateListController, deleteListController} = require('../controllers/listController')


router.get("/", todosListController)
router.get("/:id", listIDController)
router.post("/new", createListController)
router.put("/update/:id", updateListController)
router.delete("/delete/:id", deleteListController)

module.exports = router