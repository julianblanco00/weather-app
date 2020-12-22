const { Router } = require('express')
const { getWeather } = require('../controllers/getWeather');

const router = Router()

router.get('/getUrl', (req, res) => {
    res.status(200).json({
        url: 'http://localhost:3000'
    })
})

router.get('/current', getWeather)

module.exports = router;