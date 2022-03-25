const express = require('express')
const router = express.Router()

const {todosUsersController, getUserInfoController, createUserController, updateUserController, updateUserToAdminController} = require('../controllers/userController')

router.get("/", todosUsersController)
router.get("/:id", getUserInfoController)
router.post("/new", createUserController)
router.put("/update/:id", updateUserController)
router.put("/updateToAdmin/:id", updateUserToAdminController)

module.exports = router