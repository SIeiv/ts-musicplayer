import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainReducer from "./main.slice.ts";

const reducers = combineReducers({
    main: mainReducer
})

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store;