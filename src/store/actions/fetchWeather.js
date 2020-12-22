import axios from 'axios'
import {apiKey} from '../../config/config'

export const GET_WEATHER = 'GET_WEATHER'

const defaultLocations = [
    { lattlong: "-34.603722, -58.381592" },
    { lattlong: "-33.459229, -70.645348" },
    { lattlong: "40.730610,- 73.935242" },
    { lattlong: "40.4165669, -3.704676"}
]

const dispatchWeather = params => async (dispatch) => {

    const baseUrl = params.data.url;

    let citiesArr = []

    for (const location of defaultLocations) {

        const url = `${baseUrl}/current?access_key=${apiKey}&query=${location.lattlong.split(" ").join("")}`
  
        try{
            const { data } = await axios.get(url);
            citiesArr.push(data)

        }catch(err){
          throw err
        }

    }

    dispatch({type: GET_WEATHER, payload: citiesArr})
}

export default dispatchWeather