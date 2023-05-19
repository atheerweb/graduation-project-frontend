// Components
import Cards from "./components/Cards";
// MUI Components
import Grid from "@mui/material/Grid";
// Hooks
import { useSelector } from "react-redux";
// CSS Module
import styles from "@/styles/modules/freelancers/data.module.css";

const Projects = () => {
    const cardsContent = useSelector(state => state.constants.value.freelancersProjectsCards);

    return (
        <Grid className={styles.projectsGrid}>
            {
                cardsContent.map((content, index) => (
                    <Cards key={index} content={content} />
                ))
            }
        </Grid>
    )
}

export default Projects;