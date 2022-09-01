import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
import MiddleReSa from "../redux/Saga/MiddleResa"

import cityReducer from "../redux/Reducer/CityReducer";

var redux = require("redux")

const allReducer = redux.combineReducers({
    city: cityReducer,
})

const sagaMiddleware = createSagaMiddleware() 

const store = redux.createStore(
 allReducer,
    applyMiddleware(sagaMiddleware) 
)
sagaMiddleware.run(MiddleReSa) 


export default store