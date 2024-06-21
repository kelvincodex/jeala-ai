import {combineReducers} from "@reduxjs/toolkit";
import {auth} from "./auth.ts";

export const rootReducer = combineReducers({
    auth: auth.reducer,
})