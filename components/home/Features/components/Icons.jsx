// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// CSS Modules
import styles from "@/styles/modules/home/features.module.css";

const Icons = (props) => {
    return (
        <Box className={styles.featuresIcons}>
            {props.icon.icon}
            <Typography textAlign="center">
                {props.icon.title}
            </Typography>
        </Box>
    )
}

export default Icons;