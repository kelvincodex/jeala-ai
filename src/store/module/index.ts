import {combineReducers} from "@reduxjs/toolkit";
import {auth} from "./auth.ts";
import {theme} from "@/store/module/theme.ts";

export const rootReducer = combineReducers({
    auth: auth.reducer,
    theme: theme.reducer,
})