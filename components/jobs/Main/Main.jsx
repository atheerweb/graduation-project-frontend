// MUI Components
import Grid from "@mui/material/Grid";
// Components
import Cards from "../Cards/Cards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/jobs/jobs.module.css";


const Main = (props) => {
    const jobs = useSelector(state => state.api.value.allJobs).filter(card => (
        card.jop_title.toLowerCase().includes(props.filters.title.toLowerCase())
    ));

    return (
        <Grid className={styles.mainGrid}>
            {
                jobs.map((card, index) => (
                    <Cards key={index} card={card} />
                ))
            }
        </Grid>
    )
}

export default Main;