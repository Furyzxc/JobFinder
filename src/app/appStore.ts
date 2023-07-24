import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/app/rootReducer.ts";
import { api } from "@/shared/api/baseApi.ts";


export const appStore = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),

    devTools: true
})

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>