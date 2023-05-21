// Components
import Filters from "@/components/jobs/Filters/Filters";
import Main from "@/components/jobs/Main/Main";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";


const freelancers = () => {
    return (
        <Box className={styles.jobs}>
            <Typography variant="h2">
                الوظائف المتاحة
            </Typography>
            <Box className={styles.contentContainer}>
                <Filters />
                <Main />
            </Box>
        </Box>
    )
}

export default freelancers;