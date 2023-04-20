import { createSlice } from "@reduxjs/toolkit";

export const constantsSlice = createSlice({
    name: "constants",
    initialState: {
        value: {
            navLinks: [
                {title: "مستقلين", href: "/freelancers"},
                {title: "وظائف", href: "/jobs"},
                {title: "الرئيسية", href: "/"}
            ]
        }
    }
});

export default constantsSlice.reducer;