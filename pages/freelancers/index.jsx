// Components
import Filters from "@/components/freelancers/Filters/Filters";
import Main from "@/components/freelancers/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";

const Freelancers = () => {
    const [ filters, setFilters ] = useState({title: "", ratings: 5});
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

export default Freelancers;