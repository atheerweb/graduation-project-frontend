// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Components
import Cards from "./components/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/home/testimonials.module.css";

const Testimonials = (props) => {
    const testimonialsCards = useSelector(state => state.constants.value.testimonialsCards);

    return (
        <Box className={styles.testimonials}>
            <Typography variant="h2" textAlign="center">{props.header}</Typography>
            <Grid className={styles.testimonialsGrid}>
                {
                    testimonialsCards.map((card, index) => (
                        <Cards key={index} content={card} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Testimonials;