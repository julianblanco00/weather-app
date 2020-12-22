export const ADD_CITY = 'ADD_CITY'

const addCity = params => dispatch => {
  dispatch({type: ADD_CITY, payload: params}) 
}

export default addCity