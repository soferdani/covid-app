const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
//app.use('/', api)

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weather")

const port = process.env.PORT || 3000 

app.listen(port, function (err, res) {
    console.log('server running on port ' + port);
})