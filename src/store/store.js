import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducers'

const initialState = {
    cities: [],
    myCities: []
}

const middleware = [thunk]

const store = createStore( 
    reducer,
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
)

export default store;