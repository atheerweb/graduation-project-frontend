// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";
import { useApi } from "@/lib/hooks";


const Main = (props) => {
    const jobs = useApi("/freelance/jobs/").filter(card => {
        if (card.jop_title.toLowerCase().includes(props.filters.title.toLowerCase())) {
            if (card.min_price >= props.filters.minPrice) {
                if (card.max_price <= props.filters.maxPrice) {
                    return card;
                }
            }
        }
    });

    return (
        <Grid className={styles.mainGrid}>
            {
                jobs &&
                jobs.map((card, index) => (
                    <Cards key={index} card={card} />
                ))
            }
        </Grid>
    )
}

export default Main;