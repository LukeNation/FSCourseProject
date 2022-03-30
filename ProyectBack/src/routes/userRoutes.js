const express = require('express')
const router = express.Router()

const {todosUsersController, getUserInfoController, createUserController, updateUserController, updateUserToAdminController, getBoardsFromUsersController, getTaskFromUsersController} = require('../controllers/userController')

router.get("/", todosUsersController)
router.get("/boards/:id", getBoardsFromUsersController)
router.get("/tasks/:id", getTaskFromUsersController)
router.get("/info/:id", getUserInfoController)
router.post("/new", createUserController)
router.put("/update", updateUserController)
router.put("/updateToAdmin/:id", updateUserToAdminController)

module.exports = router