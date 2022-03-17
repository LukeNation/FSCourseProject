const express = require('express')
const router = express.Router()

const {getUserInfo, createUser, updateUser, updateUserToAdmin} = require('../controllers/userController')

router.get("/:id", getUserInfo)
router.post("/new", createUser)
router.put("/update/:id", updateUser)
router.put("/updateToAdmin/:id", updateUserToAdmin)

module.exports = router