import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "@/styles/modules/home/features.module.css";

const Features = () => {
    const theme = useTheme();
    const media = useMediaQuery("(max-width: 800px)");
    const featuresIcons = useSelector(state => state.constants.value.featuresIcons);

    return (
        <Box className={styles.features}>
            <Typography variant="h2" className={styles.featuresHeader}>نفذ مشروعك كما تتصوره </Typography>
            <Stack direction={media ? "column" : "row"} className={styles.featuresIconsStack} sx={{gap: media ? "50px" : "10%"}}>
                {
                    featuresIcons(theme.palette.secondary.main).map((icon, index) => (
                        <Box key={index} className={styles.featuresIcons}>
                            {icon.icon}
                            <Typography>
                                {icon.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Features;