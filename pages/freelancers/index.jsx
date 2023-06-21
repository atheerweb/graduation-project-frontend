// Components
import Filters from "@/components/freelancers/Filters/Filters";
import Main from "@/components/freelancers/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
// API
import client from "@/lib/client";
import { setAllFreelancers } from "@/redux/slices/apiSlice";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";

const Freelancers = ({ freelancers }) => {
    const [ filters, setFilters ] = useState({title: "", ratings: 5});
    const dispatch = useDispatch();
    freelancers && dispatch(setAllFreelancers({ value: freelancers }));

    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2">
                المستقلين المتاحيين
            </Typography>
            <Box className={styles.contentContainer}>
                <Filters setFilters={setFilters} />
                <Main filters={filters} />
            </Box>
        </Box>
    )
}

export const getServerSideProps = async () => {
    const response = await client.get("/freelance/all-freelancers/");
    const data = await response.data;
  
    return {
        props: {
            freelancers: data
        }
    }
}

export default Freelancers;