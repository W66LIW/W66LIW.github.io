import { combineReducers, configureStore } from "@reduxjs/toolkit";
import langSlice from "./redusers/LangSlice";
import LangSlice from "./redusers/LangSlice";



const rootReduser = combineReducers({
    LangSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType <typeof rootReduser>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispatch = AppStore['dispatch']