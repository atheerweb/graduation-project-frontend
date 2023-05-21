// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";


const Main = () => {
    const cards = useSelector(state => state.filters.value.jobsCards.filteredCards);
    return (
        <Grid className={styles.mainGrid}>
            {
                cards.map((card, index) => (
                    <Cards key={index} card={card} />
                ))
            }
        </Grid>
    )
}

export default Main;