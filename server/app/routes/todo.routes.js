module.exports = app => {
    const todo = require('../controllers/todo.controller.js')
    const router = require('express').Router()

    router.get('/todos', todo.findAll)
    router.post('/', todo.create)
    router.post('/update', todo.update)
    router.delete('/:id', todo.deleteById)

    app.use('/', router)
}
