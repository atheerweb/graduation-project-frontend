// Components
import Filters from "@/components/jobs/Filters/Filters";
import Main from "@/components/jobs/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";

const Jobs = () => {
    const [ filters, setFilters ] = useState({title: ""});
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

export default Jobs;