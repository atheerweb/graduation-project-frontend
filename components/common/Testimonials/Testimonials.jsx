import { Box, Typography, Grid } from "@mui/material";
import Cards from "./components/Cards";
import { useSelector } from "react-redux";
import styles from "@/styles/modules/home/testimonials.module.css";

const Testimonials = (props) => {
    const testimonialsCards = useSelector(state => state.constants.value.testimonialsCards);

    return (
        <Box className={styles.testimonials}>
            <Typography variant="h2" textAlign="center">{props.header}</Typography>
            <Grid className={styles.testimonialsGrid}>
                {
                    testimonialsCards.map((card, index) => (
                        <Cards key={index} title={card.title} body={card.body} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Testimonials;