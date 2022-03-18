const {db} = require('../controllers/database.controller')

// para hacer el get a todas las list "/" 
module.exports.todosList = async () => {
    const data = await db("SELECT * FROM LIST;")
    console.log(data)
    return {
        list: data
    }
} 
// para hacer el get a list por id list/:id
module.exports.listID = async (id) => {
    const data = await db(`SELECT * FROM LIST WHERE id = ${id}`)
    console.log(data)
    return {
        list : data[0]
    }  
}

//para hacer el post a list/new
module.exports.createList = async(titulo) => {
    const data = await db(`INSERT INTO LIST (titulo) VALUES ("${titulo}")`)

    return {
        message: `Lista creada con id ${data.id}`
    }
}

//para hacer el put a list/update/:id
module.exports.updateList = async(id, titulo) => {
    const data = await db(`UPDATE LIST SET titulo = "${titulo}" WHERE id = ${id}`)
    return {
        message: `Lista actualizada con id ${data.id}`
    }
}

//para hacer el delete a list/delete/:id
module.exports.deleteList = async (id) => {
    const data = await db(`DELETE FROM LIST WHERE id = ${id}`)
    
    return {
        message: `Lista eliminada con id ${data.id}`
    }  
}