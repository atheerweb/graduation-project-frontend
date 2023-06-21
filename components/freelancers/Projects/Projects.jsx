// Components
import Cards from "./components/Cards";
// MUI Components
import Grid from "@mui/material/Grid";
// Hooks
import { useSelector } from "react-redux";
// CSS Module
import styles from "@/styles/modules/freelancers/projects.module.css";

const Projects = () => {
    const freelancer = useSelector(state => state.api.value.oneFreelancer);

    return (
        <Grid className={styles.projectsGrid}>
            {
                freelancer.projects.map((content, index) => (
                    <Cards key={index} content={content} />
                ))
            }
        </Grid>
    )
}

export default Projects;