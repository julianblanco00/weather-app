const express = require('express')
const path = require("path");

const app = express()

app.use(express.static(path.join(__dirname, "..", "build")));

app.get('/getUrl', (req, res) => {
    res.status(200).json({
        url: 'http://api.weatherstack.com'
    })
})

app.listen(3000, () => {
    console.log('Express is running')
})
