// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";


const Main = (props) => {
    const filteredCards = useSelector(state => state.constants.value.freelancersAvailableCards).filter(card => (
        card.title.toLowerCase().includes(props.filters.title.toLowerCase())
    ));
    return (
        <Grid className={styles.mainGrid}>
            {
                filteredCards.map((card, index) => (
                    <Cards key={index} card={card} />
                ))
            }
        </Grid>
    )
}

export default Main;