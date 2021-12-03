import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer, userProfileReducer } from './reducers/userReducers'

// list of reducerrs


const reducer = combineReducers({
    userList:userListReducer,
    userProfile:userProfileReducer,
})


const initialState = {
}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store