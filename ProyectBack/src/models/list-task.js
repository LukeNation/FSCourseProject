const {db} = require('../controllers/database.controller')

//para hacer el get a todas las tareas de mi lista
module.exports.getTaskFromList = async (idList) => {
    const data = await db(`SELECT * FROM LIST-TASK,TASK INNER JOIN TASK ON LIST-TASK.idTask == TASK.id WHERE LIST-TASK.idList = ${idList};`)
    console.log(data)
    return {
        task: data
    }
} 