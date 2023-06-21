import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import constantsSlice from "./slices/constantsSlice";
import filtersSlice from "./slices/filtersSlice";
import apiSlice from "./slices/apiSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice,
        filters: filtersSlice,
        api: apiSlice,
        user: userSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;