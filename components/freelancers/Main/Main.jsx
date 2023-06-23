// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";


const Main = (props) => {
    const ratings = Math.floor((Math.random() * 5) + 1);
    const filteredCards = useSelector(state => state.api.value.allFreelancers).filter(card => {
        const fullName = `${card.first_name} ${card.last_name}`;

        if (fullName.toLowerCase().includes(props.filters.title.toLowerCase())) {
            if (ratings === props.filters.ratings) {
                return card;
            }
        }
    });

    return (
        <Grid className={styles.mainGrid}>
            {
                filteredCards.map((card, index) => (
                    <Cards key={index} card={card} ratings={ratings} />
                ))
            }
        </Grid>
    )
}

export default Main;