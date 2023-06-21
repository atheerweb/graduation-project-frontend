// Components
import Cards from "./components/Cards";
// MUI Components
import Grid from "@mui/material/Grid";
// Hooks
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// CSS Module
import styles from "@/styles/modules/freelancers/projects.module.css";

const Projects = () => {
    const { query: { username } } = useRouter();
    const freelancer = useApi(`/freelance/freelancer/${username}`);
    console.log(freelancer);
    const cardsContent = useSelector(state => state.constants.value.freelancersProjectsCards);

    return (
        <Grid className={styles.projectsGrid}>
            {
                freelancer.projects &&
                freelancer.projects.map((content, index) => (
                    <Cards key={index} content={content} />
                ))
            }
        </Grid>
    )
}

export default Projects;