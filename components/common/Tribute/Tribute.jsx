import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/modules/common/tribute.module.css";

const Tribute = (props) => {
    const theme = useTheme();

    return (
        <Box className={styles.tribute} sx={{backgroundImage: `url(${props.image})`}}>
            <Typography variant="h1" sx={{color: theme.palette.accent.light, textAlign: "center"}}>
                {props.title}
            </Typography>
        </Box>
    )
}

export default Tribute;