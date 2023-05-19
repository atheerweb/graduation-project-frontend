// Components
import Icons from "./components/Icons";
// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Hooks
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/home/features.module.css";

const Features = () => {
    const theme = useTheme();
    const featuresIcons = useSelector(state => state.constants.value.featuresIcons);

    return (
        <Box className={styles.features}>
            <Typography variant="h2" className={styles.featuresHeader}>نفذ مشروعك كما تتصوره </Typography>
            <Grid className={styles.featuresIconsGrid}>
                {
                    featuresIcons(theme.palette.secondary.main).map((icon, index) => (
                        <Icons key={index} className={styles.featuresIcons} icon={icon} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Features;