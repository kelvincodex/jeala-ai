import {combineReducers} from "@reduxjs/toolkit";
import {auth} from "./auth.ts";
import {theme} from "@/store/module/theme.ts";
import {base} from "@/store/module/base.ts";

export const rootReducer = combineReducers({
    auth: auth.reducer,
    theme: theme.reducer,
    base: base.reducer,
})