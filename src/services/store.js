import { configureStore } from '@reduxjs/toolkit'
import {AuthApi} from "./AuthApi.js";
// Or from '@reduxjs/toolkit/query/react'


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [AuthApi.reducerPath]: AuthApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AuthApi.middleware),
})