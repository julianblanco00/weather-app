const express = require('express')
const path = require("path");

const app = express()

const weatherRoutes = require('./routes/weather')

app.use(express.static(path.join(__dirname, "..", "build")));

app.use('/', weatherRoutes)

app.listen(3000, () => {
    console.log('Express is running')
})
