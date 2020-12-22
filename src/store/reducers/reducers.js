import { GET_WEATHER } from '../actions/fetchWeather'
import { ADD_CITY } from '../actions/addCity'

const reducer = (state = [], {type, payload}) => {
  
  switch (type) {

    case GET_WEATHER:
      return {
        cities: payload,
        myCities: []
      }

    case ADD_CITY:

      let result = {...state}
      result.myCities.push(payload)

      return {
        ...result
      }
  
    default:
      return state;

  }
  
}

export default reducer;