const db = require('../models')
const Todo = db.todo

/**
 * Create todo item
 * @param req in body has person data
 * @param res
 * @returns {Promise<Todo>}
 */
exports.create = async (req, res) => {
    const hasNotBodyData = Object.keys(req.body).length === 0

    if (hasNotBodyData) {
        res.status(400).send({
            message: 'Content cannot be empty'
        })
    }

    try {
        const todo = await Todo.create({...req.body})
        res.send(todo)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}

/**
 * Update isChecked
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
    const hasNotBodyData = Object.keys(req.body).length === 0

    if (hasNotBodyData) {
        res.status(400).send({
            message: 'Content cannot be empty'
        })
    }

    try {
        const todo = await _findById(req.body.id)
        todo.isChecked = !todo.isChecked

        await todo.save()
        res.send(todo)
    } catch (err) {

    }
}

/**
 * Find all todo items
 * @param req
 * @param res
 * @returns {Promise<[Todo]>}
 */
exports.findAll = async (req, res) => {
    const todos = await Todo.findAll()

    if (!todos) {
        res.status(400).send({
            message: 'In database has not todos'
        })
    }

    res.send(todos)
}

/**
 * Delete todo by id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteById = async (req, res) => {
    try {
        await Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        res.send('Todo was deleted')
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}


/**
 * Get todo by id
 * @param userId user id
 * @returns {Promise<Todo>}
 * @private
 */
async function _findById(userId) {
    const todo = await Todo.findByPk(userId)

    if (!todo) {
        throw new Error(`Todo not found with id: ${userId}`)
    }

    return todo
}
