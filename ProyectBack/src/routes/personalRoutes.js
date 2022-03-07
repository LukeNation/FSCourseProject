const express = require('express')
const router = express.Router()

const {todoPersonal, personalID, deletePersona, createPersona, updatePersona} = require('../s/routes.db.s')

router.get("/", todoPersonal)
router.get("/:id", personalID)
router.post("/crear", createPersona)
router.put("/actualizar/:id", updatePersona)
router.delete("/:id", deletePersona)

router.get("/user/:id", getUserInfo)
router.post("/user/new", createUser)
router.put("/user/update/:id", updateUser)
router.put("/user/updateToAdmin/:id", updateUserToAdmin)

router.get("/board/:idUser", getBoardsFromUser)
router.get("/board/:id", getBoard)
router.get("/board/:idBoard/lists", getListsFromBoard)
router.post("/board/new", createBoard)
router.put("/board/update/:id", updateBoard)
router.delete("/board/delete/:id", deleteBoard)

router.get("/list/:idList/tasks", getTasksFromList)
router.post("/list/new", createList)
router.put("/list/update/:id", updateList)
router.delete("/list/delete/:id", deleteBoard)

router.get("/task/:id", getTask)
router.post("/task/new", createTask)
router.put("/task/update/:id", updateTask)
router.delete("/task/delete/:id", deleteTask)


module.exports = router