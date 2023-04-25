import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import { contactApi } from "./api/contactApi";


export const store=configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,contactApi.middleware),
})