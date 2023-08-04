import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/app/rootReducer.ts";
import { baseApi } from "@/shared/api/baseApi.ts";


export const appStore = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),

    devTools: true
})

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>