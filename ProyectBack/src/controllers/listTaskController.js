const {getTasksFromList} = require('../models/list-task')

module.exports.getTasksFromListController = async (req,res) => {
    const {idList} = req.params
    try {
        const tasks = await getTasksFromList(idList)
        return res.send(tasks)
    } catch(err) {
       
        return res.send(err)
    }
}