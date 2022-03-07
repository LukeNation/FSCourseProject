const express = require('express')
const router = express.Router()

const {todoPersonalController, personalIDController, deletePersonaController, createPersonaController, updatePersonaController} = require('../controllers/routes.db.controllers')

router.get("/", todoPersonalController)
router.get("/:id", personalIDController)
router.post("/crear", createPersonaController)
router.put("/actualizar/:id", updatePersonaController)
router.delete("/:id", deletePersonaController)

module.exports = router