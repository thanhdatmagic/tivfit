import UserReducer from "./user";
import { combineReducers } from 'redux';
import { useReducer } from "react";

const rootReducer = combineReducers({
    user:UserReducer,
})

export default rootReducer;