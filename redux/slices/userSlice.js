import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {}
    },
    reducers: {
        userLogin: (state, action) => {
            state.value = action.payload.value;
        },
        userLogout: (state, action) => {
            state.value = {}
        }
    }
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;