// Components
import Filters from "@/components/jobs/Filters/Filters";
import Main from "@/components/jobs/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useDispatch } from "react-redux";
import { useReducer } from "react";
// API
import client from "@/lib/client";
import { setAllJobs } from "@/redux/slices/apiSlice";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";

export const reducer = (state, action) => {
    switch(action.type) {
        case "title": return { title: action.payload, minPrice: state.minPrice, maxPrice: state.maxPrice };
        case "minPrice": return { title: state.title, minPrice: action.payload, maxPrice: state.maxPrice };
        default: return { title: state.title, minPrice: state.minPrice, maxPrice: action.payload };
    }
}

const Jobs = ({ jobs }) => {
    const [filters, setFilters] = useReducer(reducer, { title: "", minPrice: 0, maxPrice: 9999999 });
    const dispatch = useDispatch();
    dispatch(setAllJobs({ value: jobs }));

    return (
        <Box className={styles.jobs}>
            <Typography variant="h2">
                الوظائف المتاحة
            </Typography>
            <Box className={styles.contentContainer}>
                <Filters setFilters={setFilters} />
                <Main filters={filters} />
            </Box>
        </Box>
    )
}

export const getServerSideProps = async () => {
    const response = await client.get("/freelance/jobs/");
    const data = await response.data;
  
    return {
        props: {
            jobs: data
        }
    }
}

export default Jobs;