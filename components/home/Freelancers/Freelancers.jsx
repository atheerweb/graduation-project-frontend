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
    const freelancersCards = useSelector(state => state.constants.value.freelancersCards);
    
    return (
        <Box className={styles.freelancers}>
            <Typography variant="h2" textAlign="center">أكثر المستقلين طلباً</Typography>
            <Grid className={styles.freelancersCardsGrid}>
                {
                    freelancersCards.map((freelancer, index) => (
                        <Cards key={index} title={freelancer.title} body={freelancer.body} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Freelancers;