import Icons from "./components/Icons";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
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