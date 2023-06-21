// Components
import Filters from "@/components/jobs/Filters/Filters";
import Main from "@/components/jobs/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useDispatch } from "react-redux";
import { useState } from "react";
// API
import client from "@/lib/client";
import { setAllJobs } from "@/redux/slices/apiSlice";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";

const Jobs = ({ jobs }) => {
    const [ filters, setFilters ] = useState({title: ""});
    const dispatch = useDispatch();
    jobs && dispatch(setAllJobs({ value: jobs }));

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