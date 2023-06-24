// Components
import Cards from "./components/Cards";
// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// CSS Modules
import styles from "@/styles/modules/home/freelancers.module.css";
import { useApi } from "@/lib/hooks";

const Freelancers = () => {
    const freelancers = useApi("/freelance/top-5-freelancers/");

    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2" textAlign="center">أكثر المستقلين طلباً</Typography>
            <Grid className={styles.freelancersCardsGrid}>
                {
                    freelancers &&
                    freelancers.map((freelancer, index) => (
                        <Cards key={index} username={freelancer.username} title={`${freelancer.first_name} ${freelancer.last_name}`} body={freelancer.about} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Freelancers;