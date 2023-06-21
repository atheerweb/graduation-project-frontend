import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "api",
    initialState: {
        value: {
            topFreelancers: [],
            allJobs: [],
            oneJob: [],
            allFreelancers: [],
            oneFreelancer: []
        }
    },
    reducers: {
        setTopFreelancers: (state, action) => {
            state.value.topFreelancers = action.payload.value;
        },
        setAllJobs: (state, action) => {
            state.value.allJobs = action.payload.value;
        },
        setOneJob: (state, action) => {
            state.value.oneJob = action.payload.value;
        },
        setAllFreelancers: (state, action) => {
            state.value.allFreelancers = action.payload.value;
        },
        setOneFreelancer: (state, action) => {
            state.value.oneFreelancer = action.payload.value;
        }
    }
})

export const { setTopFreelancers, setAllJobs, setOneJob, setAllFreelancers, setOneFreelancer } = apiSlice.actions;
export default apiSlice.reducer;