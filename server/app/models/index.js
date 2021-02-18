const Sequelize = require('sequelize')
const {
    DB, dialect, HOST, PASSWORD, USER,
    pool
} = require('../config/db.config')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect,
    operatorsAliases: false,
    pool,
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.todo = require('./todo.model')(Sequelize, sequelize)

module.exports = db
