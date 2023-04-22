import { Grid } from "@mui/material";
import Cards from "./components/Cards";
import styles from "@/styles/modules/freelancers/data.module.css";
import { useSelector } from "react-redux";

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