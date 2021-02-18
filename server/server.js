const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// parse request of content-type - application/json
app.use(bodyParser.json())

// pare request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./app/models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.json({id: 20, title: 'Hello', isChecked: false})
})

require('./app/routes/todo.routes')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('server is running on port:', PORT)
})
