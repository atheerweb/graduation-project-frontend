import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import constantsSlice from "./slices/constantsSlice";
import filtersSlice from "./slices/filtersSlice";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice,
        filters: filtersSlice,
        api: apiSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;