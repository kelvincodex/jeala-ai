import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import {rootReducer} from "./module";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';



const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
    persistConfig,
    rootReducer
)
export const store: ToolkitStore = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch