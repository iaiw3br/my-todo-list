module.exports = (Sequelize, sequelize) => {
    const Todo = sequelize.define('todo', {
        title: {
            type: Sequelize.STRING
        },
        isChecked: {
            type: Sequelize.BOOLEAN,
            default: false,
        }
    }, {
        schema: 'public',
        tableName: 'todo',
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'updated',
        deletedAt: 'deleted',
    })

    return Todo
}
