import { configureStore } from "@reduxjs/toolkit";
import constantsSlice from "./slices/constantsSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice
    }
});

export default store;