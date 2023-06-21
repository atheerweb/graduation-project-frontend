// Components
import Cards from "./components/Cards";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/home/freelancers.module.css";

const Freelancers = () => {
    const freelancers = useSelector(state => state.api.value.topFreelancers);

    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2" textAlign="center">أكثر المستقلين طلباً</Typography>
            <Grid className={styles.freelancersCardsGrid}>
                {
                    freelancers.map((freelancer, index) => (
                        <Cards key={index} title={`${freelancer.first_name} ${freelancer.last_name}`} body={freelancer.about} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Freelancers;