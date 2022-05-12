import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {jobListReducers, jobDetailsReducer} from './reducers/jobReducers'



const reducer= combineReducers({
    jobList: jobListReducers,
    jobDetails: jobDetailsReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store