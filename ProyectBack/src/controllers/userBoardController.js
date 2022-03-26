const {getBoardsFromUsers } = require('../models/user-board')

module.exports.getBoardsFromUsersController = async (req,res) => {
    const {id} = req.params
    try {
        const userBoard = await getBoardsFromUsers(id)
        return res.send(userBoard)
    } catch(err) {
       
        return res.send(err)
    }
}
