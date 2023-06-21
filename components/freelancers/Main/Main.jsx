// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useApi } from "@/lib/hooks";
// CSS Modules
import styles from "@/styles/modules/freelancers/freelancers.module.css";


const Main = (props) => {
    const filteredCards = useApi("/freelance/all-freelancers/").filter(card => {
        const fullName = `${card.first_name} ${card.last_name}`;
        return fullName.toLowerCase().includes(props.filters.title.toLowerCase()) 
    });

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