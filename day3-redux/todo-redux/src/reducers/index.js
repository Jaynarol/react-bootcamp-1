import {combineReducers} from 'redux'
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todoitems: todoReducer
})

export default rootReducer