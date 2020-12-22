const axios = require('axios')
const {baseUrl} = require('../config/config')

const getWeather = async ({query}, res) => {

    const keys = Object.keys(query)
    const values = Object.values(query)

    const arr = []

    for (let i = 0; i < keys.length; i++) {
        arr.push(`${keys[i]}=`, `${values[i]}&`);
    }

    let url = arr.join('').slice(0, -1)
    url = `${baseUrl}/current?${url}`

    const {data} = await axios.get(url)

    res.status(200).json({
       ...data
    })
}

module.exports = { getWeather }