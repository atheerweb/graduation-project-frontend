import { Box, Typography, Grid } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
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