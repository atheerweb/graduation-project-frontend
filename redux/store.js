import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import constantsSlice from "./slices/constantsSlice";
import filtersSlice from "./slices/filtersSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice,
        filters: filtersSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;